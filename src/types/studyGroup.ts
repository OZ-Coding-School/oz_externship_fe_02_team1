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

export interface StudyGroupLogList {
  id: number
  title: string
  date: Date
  authorId: number
  attachment?: string[]
}

export interface StudyGroupScheduleList {
  id: number
  title: string
  goal: string
  date: Date
  startTime: Date
  endTime: Date
  participants: StudyGroupMemberList[]
  createDate: Date
}

export interface StudyGroup {
  backgroundImage?: string
  studyGroupName: string
  description?: string
  currentMemberCount: number
  maxMemberCount: number
  startDate: Date
  lastDate: Date
  lecture?: StudyGroupLectureList[]
  member: StudyGroupMemberList[]
  studyLog?: StudyGroupLogList[]
  schedule?: StudyGroupScheduleList[]
}
