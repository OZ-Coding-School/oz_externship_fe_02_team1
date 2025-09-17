export interface ScheduleFormInputs {
  title: string
  goal: string
  date: Date
  startTime: string | undefined
  endTime: string | undefined
  participants: string[]
}
