import { axiosInstance } from '@/lib/fetcher'
import type { LoginRequest, LoginResponse } from '@/types/auth'

const authApi = {
  login: async (params: LoginRequest) => {
    const response = await axiosInstance.post<LoginResponse>(
      '/auth/email/login',
      params
    )
    return response.data
  },
}

export default authApi
