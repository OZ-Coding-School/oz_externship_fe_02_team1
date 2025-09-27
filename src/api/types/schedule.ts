export interface CreateScheduleRequest {
  studyGroupUuid: string
  title: string
  objective: string
  sessionDate: string
  startTime: string
  endTime: string
  participants?: {
    userId: number
    nickname: string
    isLeader: boolean
  }[]
}

export interface CreateScheduleResponse {
  id: number
  title: string
  objective: string
  sessionDate: string
  startTime: string
  endTime: string
  studyGroupUuid: string
  studyGroupName: string
  createdAt: string
  updatedAt: string
  participants?: {
    userId: number
    nickname: string
    isLeader: boolean
  }[]
}

export interface ScheduleListResponse {
  count: number
  next: string | null
  previous: string | null
  results: CreateScheduleResponse[]
}
