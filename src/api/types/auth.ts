export type LoginResponse = {
  accessToken: string
  refreshToken: string
}

export type LoginRequest = {
  email: string
  password: string
}
