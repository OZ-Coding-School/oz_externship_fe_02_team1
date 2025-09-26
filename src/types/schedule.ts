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
