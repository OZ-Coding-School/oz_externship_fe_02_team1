import type { User } from '@models'

export interface AiSummary {
  summary: string
  collapsible: boolean
}

export interface Image {
  id: number
  img_url: string
}

export interface Attachment {
  id: number
  file_name: string
  file_url: string
}

export interface StudyLogBase {
  id: number
  title: string
}

export interface StudyLogEdit extends StudyLogBase {
  content: string
  updated_at: string
}

export interface StudyLogDetail {
  id: number
  title: string
  content: string
  author: User
  images: Image[] | null
  attachments: Attachment[] | null
  ai_summary: AiSummary | null
  created_at: string
  updated_at: string
}

export interface StudyLogCreate extends StudyLogDetail {
  study_group: string
}

export interface StudyLogListItem extends StudyLogBase {
  author: User
  created_at: string
}

export interface StudyLogListResponse {
  count: number
  results: StudyLogListItem[]
}
