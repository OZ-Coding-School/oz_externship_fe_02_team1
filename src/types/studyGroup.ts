export interface StudyGroupLectureList {
  image?: string
  title: string
  instructor: string
}

export interface StudyGroup {
  backgroundImage?: string
  studyGroupName: string
  currentMemberCount: number
  maxMemberCount: number
  startDate: Date
  lastDate: Date
  lecture?: StudyGroupLectureList[]
}
