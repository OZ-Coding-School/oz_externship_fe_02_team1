import { API_PATHS } from '@constants'
import { axiosInstance } from '@lib'

import type { LoginRequest, LoginResponse } from '@api'

export const authApi = {
  login: async (params: LoginRequest) => {
    const response = await axiosInstance.post<LoginResponse>(
      API_PATHS.AUTH.LOGIN,
      params
    )
    return response.data
  },
  logout: async () => {
    const response = await axiosInstance.post(API_PATHS.AUTH.LOGOUT)
    return response.data
  },
}
