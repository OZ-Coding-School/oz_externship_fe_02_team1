import type { User } from '@models'

export interface AiSummary {
  summary: string
  collapsible: boolean
}

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
  title: string
  content: string
  author: User
  images: Image[] | null
  attachments: Attachment[] | null
  aiSummary: AiSummary | null
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
