import type { User } from '@models'

export interface Image {
  id: number
  imgUrl: string
}

export interface Attachment {
  id: number
  fileName: string
  fileUrl: string
}

export interface StudyLogBase {
  id: number
  title: string
}

export interface StudyLogEdit extends StudyLogBase {
  content: string
  updatedAt: string
}

export interface StudyLogDetail {
  id: number
  studyGroupId: string
  title: string
  content: string
  author: User
  images: Image[] | null
  attachments: Attachment[] | null
  aiSummary: string | null
  createdAt: string
  updatedAt: string
}

export interface StudyLogCreate extends StudyLogDetail {
  studyGroup: string
}

export interface StudyLogListItem extends StudyLogBase {
  author: User
  createdAt: string
}

export interface StudyLogListResponse {
  count: number
  results: StudyLogListItem[]
}
