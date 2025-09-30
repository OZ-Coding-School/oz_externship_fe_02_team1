import type { Lecture, LectureBase, Member } from '@models'

export type StudyGroupStatus = '대기중' | '진행중' | '종료됨'

export interface StudyGroupBase {
  uuid: string
  name: string
  imgUrl?: string
  startAt: string
  endAt: string
  maxHeadcount: number
}

export interface StudyGroupList extends StudyGroupBase {
  id?: number
  currentHeadcount: number
  status: StudyGroupStatus
  lectures: LectureBase[]
  isLeader: boolean
  leader?: {
    uuid: string
    nickname: string
    isLeader: boolean
    profileImage?: string
  }
  members?: {
    uuid: string
    nickname: string
    isLeader: boolean
    profileImage?: string
  }[]
}

export interface StudyGroupMemberList extends Member {
  isLeader: boolean
}

export interface StudyGroupDetail extends StudyGroupBase {
  currentHeadcount: number
  status: StudyGroupStatus
  leader: Member
  members: StudyGroupMemberList[]
  lectures: Lecture[]
}
