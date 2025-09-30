import { create } from 'zustand'

interface User {
  id?: number
  uuid: string
  nickname: string
  profileImgUrl: string
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

const getUser = (): User | null => {
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : null
}
const setUser = (user: User) =>
  localStorage.setItem('user', JSON.stringify(user))
const removeUser = () => localStorage.removeItem('user')

export const useAuthStore = create<AuthState>((set) => ({
  user: getUser(),
  isLoggedIn: !!getAccessToken(),
  login: (accessToken, user) => {
    setAccessToken(accessToken)
    setUser(user)
    set({ isLoggedIn: true, user })
  },
  logout: () => {
    removeTokens()
    removeUser()
    set({ isLoggedIn: false, user: null })
  },
}))

export const authSelectors = {
  getAccessToken,
}
