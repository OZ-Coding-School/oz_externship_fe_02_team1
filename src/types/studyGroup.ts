export interface StudyGroupLectureList {
  image?: string
  title: string
  instructor: string
  lectureUrl: string
}

export interface StudyGroupMemberList {
  id: number
  name: string
  profileImage?: string
  isLeader: boolean
}

export interface StudyGroupScheduleList {
  id: number
  title: string
  date: Date
  startTime: Date
  endTime: Date
}

export interface StudyGroup {
  backgroundImage?: string
  studyGroupName: string
  currentMemberCount: number
  maxMemberCount: number
  startDate: Date
  lastDate: Date
  lecture?: StudyGroupLectureList[]
  member: StudyGroupMemberList[]
  schedule: StudyGroupScheduleList[]
}
