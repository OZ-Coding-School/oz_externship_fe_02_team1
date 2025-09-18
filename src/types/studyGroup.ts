import type { Lecture, LectureBase, Member } from '@models'

export type StudyGroupStatus = '대기중' | '진행중' | '종료됨'

export interface StudyGroupBase {
  uuid: string
  name: string
  img_url?: string
  start_at: string
  end_at: string
  max_headcount: number
}

export interface StudyGroupCreate extends StudyGroupBase {
  introduction: string
  created_by: Member
  created_at: string
}

export interface StudyGroupEdit extends StudyGroupCreate {
  updated_at: string
}

export interface StudyGroupList extends StudyGroupBase {
  current_headcount: number
  is_leader: boolean
  status: StudyGroupStatus
  lectures: LectureBase[]
}

export interface StudyGroupDetail {
  current_headcount: number
  status: StudyGroupStatus
  leader: Member
  members: (Member & {
    is_leader: boolean
  })[]
  lectures: Lecture[]
}
