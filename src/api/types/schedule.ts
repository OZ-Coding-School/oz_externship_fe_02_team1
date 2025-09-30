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

export interface ScheduleDatailRequest {
  scheduleId: number
  studyGroupUuid: string
}

export interface ScheduleDetailResponse {
  id: number
  title: string
  objective: string
  sessionDate: string
  startTime: string
  endTime: string
  studyGroup: {
    studyGroupUuid: string
    studyGroupName: string
    description: string
    leaderNickname: string
  }
  participantCount: number
  participants: {
    userId: number
    userNickname: string
    userEmail: string
    isLeader: boolean
  }[]
  createdAt: string
  updatedAt: string
}

export interface UpdateScheduleRequest {
  title?: string
  objective?: string
  sessionDate?: string
  startTime?: string
  endTime?: string
  studyGroupUuid?: string
  participantIds?: number[]
}

export interface UpdateScheduleResponse {
  id: number
  title: string
  objective: string
  sessionDate: string
  startTime: string
  endTime: string
  studyGroup: {
    studyGroupUuid: string
    studyGroupName: string
    description: string
    leaderNickname: string
  }
  participantCount: number
  participants: {
    userId: number
    userNickname: string
    userEmail: string
    isLeader: boolean
  }[]
  createdAt: string
  updatedAt: string
}
