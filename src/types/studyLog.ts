export interface AiSummary {
  summary: string
  collapsible: boolean
}

export interface Author {
  id: number
  nickname: string
  profile_image: string
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

export interface StudyLog {
  id: number
  title: string
  content: string
  author: Author
  images: Image[]
  attachments: Attachment[]
  ai_summary: AiSummary
  created_at: string
  updated_at: string
}
