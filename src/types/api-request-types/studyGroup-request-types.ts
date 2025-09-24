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
