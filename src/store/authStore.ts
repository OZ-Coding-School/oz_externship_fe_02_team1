import { create } from 'zustand'

interface AuthState {
  isLoggedIn: boolean
  login: (accessToken: string) => void
  logout: () => void
}

const getAccessToken = (): string | null => localStorage.getItem('accessToken')
const setAccessToken = (token: string) =>
  localStorage.setItem('accessToken', token)
const removeTokens = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoggedIn: !!getAccessToken(),
  login: (accessToken) => {
    setAccessToken(accessToken)
    set({ isLoggedIn: true })
  },
  logout: () => {
    removeTokens()
    set({ isLoggedIn: false })
  },
}))

export const authSelectors = {
  getAccessToken,
}
