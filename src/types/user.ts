export interface User {
  id: number
  nickname: string
  profileImage?: string
  profileImgUrl?: string | null
}

export interface Member {
  uuid: string
  nickname: string
  profileImage?: string
}
