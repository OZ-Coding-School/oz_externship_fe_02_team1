export interface CreateScheduleRequest {
  studyGroupUuid: string
  title: string
  objective: string
  sessionDate: string
  startTime: string
  endTime: string
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
}
