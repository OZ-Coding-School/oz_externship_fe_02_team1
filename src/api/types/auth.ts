export type LoginResponse = {
  accessToken: string
  refreshToken: string
  user: {
    uuid: string
    nickname: string
    profileImgUrl?: string | null
  }
}

export type LoginRequest = {
  email: string
  password: string
}
