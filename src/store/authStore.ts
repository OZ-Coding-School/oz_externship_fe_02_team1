import { create } from 'zustand'

interface User {
  uuid: string
  nickname: string
}

interface AuthState {
  user: User | null
  isLoggedIn: boolean
  login: (accessToken: string, user: User) => void
  logout: () => void
}

const getAccessToken = (): string | null => localStorage.getItem('accessToken')
const setAccessToken = (token: string) =>
  localStorage.setItem('accessToken', token)
const removeTokens = () => {
  localStorage.removeItem('accessToken')
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoggedIn: !!getAccessToken(),
  login: (accessToken, user) => {
    setAccessToken(accessToken)
    set({ isLoggedIn: true, user })
  },
  logout: () => {
    removeTokens()
    set({ isLoggedIn: false, user: null })
  },
}))

export const authSelectors = {
  getAccessToken,
}
