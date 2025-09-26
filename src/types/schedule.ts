import type { User } from '@models'

export interface ScheduleFormInputs {
  title: string
  objective: string
  sessionDate: string
  startTime: string
  endTime: string
  participants: {
    uuid: string
    nickname: string
  }[]
}

export interface ScheduleBase {
  id: number
  title: string
  objective: string
  sessionDate: string
  startTime: string
  endTime: string
}

export interface ScheduleCreate extends ScheduleBase {
  studyGroupId: number
  createdAt: string
}

export interface ScheduleUpdate extends ScheduleBase {
  studyGroupId: number
  updatedAt: string
}

export interface ScheduleListItem extends ScheduleBase {
  createdAt: string
}

export type ScheduleList = ScheduleListItem[]

export interface ScheduleParticipant {
  memberId: number
  user: User & {
    isLeader: boolean
  }
}

export interface ScheduleDetail extends ScheduleCreate {
  participants: ScheduleParticipant[]
  updatedAt: string
}
