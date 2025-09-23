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
