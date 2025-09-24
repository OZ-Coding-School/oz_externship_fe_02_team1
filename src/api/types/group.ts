export interface CreateStudyGroupRequest {
  name: string
  introduction?: string | null
  maxHeadcount: number
  profileImgUrl?: string | null
  profileImg?: File | null
  startAt: string
  endAt: string
  lectures?: number[]
}

export interface CreateStudyGroupResponse {
  uuid: string
  name: string
  introduction: string
  maxHeadcount: number
  profileImgUrl: string
  startAt: string
  endAt: string
  lectures: number[]
  createdAt: string
}
