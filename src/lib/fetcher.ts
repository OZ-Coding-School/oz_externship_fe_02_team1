import { keysToCamel } from '@utils/caseConverter'
import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios'

import { API_BASE_URL, API_PATHS } from '@constants'

let isRefreshing = false
let refreshSubscribers: ((token: string) => void)[] = []

const onRrefreshed = (token: string) => {
  refreshSubscribers.forEach((cb) => cb(token))
  refreshSubscribers = []
}

const addRefreshSubscriber = (cb: (token: string) => void) => {
  refreshSubscribers.push(cb)
}

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  withCredentials: true,
})

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data) {
      response.data = keysToCamel(response.data)
    }
    return response
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean
    }

    // ✅ 401 Unauthorized (accessToken 만료 → refresh 시도)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      if (isRefreshing) {
        return new Promise((resolve) => {
          addRefreshSubscriber((newToken) => {
            originalRequest.headers.Authorization = `Bearer ${newToken}`
            resolve(axiosInstance(originalRequest))
          })
        })
      }

      isRefreshing = true
      try {
        const { data } = await axios.post(
          `${API_BASE_URL}${API_PATHS.AUTH.REFRESH}`,
          {},
          { withCredentials: true }
        )

        const newAccessToken = (data as { accessToken: string }).accessToken
        localStorage.setItem('accessToken', newAccessToken)

        onRrefreshed(newAccessToken)

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
        return axiosInstance(originalRequest)
      } catch (refreshError: any) {
        localStorage.removeItem('accessToken')
        // TODO: zustand 상태 관리도 초기화 필요
        window.location.href = '/login'
        return Promise.reject(refreshError)
      } finally {
        isRefreshing = false
      }
    }

    // ✅ 기타 에러 처리
    if (error.response?.status === 400) {
      console.error('Bad Request:', error.response.data)
    } else if (error.response?.status === 403) {
      console.error('Forbidden:', error.response.data)
    } else if (error.response?.status === 404) {
      console.error('Not Found:', error.response.data)
    } else if (error.response?.status === 422) {
      console.error('Unprocessable Entity:', error.response.data)
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
