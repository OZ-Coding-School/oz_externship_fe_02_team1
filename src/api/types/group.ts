import type { StudyGroupStatus } from '@models'

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

export interface StudyGroupDetailResponse {
  uuid: string
  name: string
  current_headcount: number
  maxHeadcount: number
  leader: {
    uuid: string
    nickname: string
  }
  members: {
    uuid: string
    nickname: string
    isLeader: boolean
  }[]
  imgUrl: string
  startAt: string
  endAt: string
  status: StudyGroupStatus
  lectures: {
    lectureId: number
    lectureTitle: string
    instructor: string
    thumbnailImg: string
    urlLink: string
  }[]
}
