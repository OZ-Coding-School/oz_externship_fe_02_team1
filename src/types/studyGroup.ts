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

export interface StudyGroup {
  backgroundImage?: string
  studyGroupName: string
  currentMemberCount: number
  maxMemberCount: number
  startDate: Date
  lastDate: Date
  lecture?: StudyGroupLectureList[]
  member: StudyGroupMemberList[]
}
