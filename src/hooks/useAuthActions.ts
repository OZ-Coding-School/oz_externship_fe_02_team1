import { authApi } from '@api'
import { useAuthStore } from '@store'

export const useAuthActions = () => {
  const handleLogin = async () => {
    try {
      const response = await authApi.login({
        email: 'admin@ozcoding.site',
        password: 'ozcoding0917!@',
      })

      useAuthStore.getState().login(response.access)
    } catch (error) {
      // TODO: 토스트 알림 교체
      console.error('로그인 실패:', error)
    }
  }

  const handleLogout = async () => {
    try {
      await authApi.logout()
      useAuthStore.getState().logout()
    } catch (error) {
      // TODO: 토스트 알림 교체
      console.error('로그아웃 실패:', error)
    }
  }

  return {
    handleLogin,
    handleLogout,
  }
}
