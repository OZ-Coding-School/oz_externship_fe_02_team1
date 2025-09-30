import { authApi } from '@api'
import { useAuthStore } from '@store'

export const useAuthActions = () => {
  const handleLogin = async () => {
    try {
      const loginResponse = await authApi.login({
        email: 'admin@ozcoding.site',
        password: 'ozcoding0917!@',
      })
      console.log('로그인 응답:', loginResponse)

      const tempUser = {
        uuid: 'leader-uuid-1234',
        nickname: '김개발',
      }

      useAuthStore.getState().login(loginResponse.accessToken, tempUser)
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
