import type { User } from '@models'

export interface ScheduleBase {
  id: number
  title: string
  objective: string
  session_date: string
  start_time: string
  end_time: string
}

export interface ScheduleCreate extends ScheduleBase {
  study_group_id: number
  created_at: string
}

export interface ScheduleUpdate extends ScheduleBase {
  study_group_id: number
  updated_at: string
}

export interface ScheduleListItem extends ScheduleBase {
  created_at: string
}

export type ScheduleList = ScheduleListItem[]

export interface ScheduleParticipant {
  member_id: number
  user: User & {
    is_leader: boolean
  }
}

export interface ScheduleDetail extends ScheduleCreate {
  participants: ScheduleParticipant[]
  updated_at: string
}
