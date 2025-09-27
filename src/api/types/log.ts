export interface CreateStudyLogRequest {
  title: string
  content: string
  image_files: string[]
  attachment_files: string[]
}

export interface UploadLogFileResponse {
  images: string[]
  attachments: string[]
  failed: string[]
}

export interface StudyLogAuthor {
  id: number
  nickname: string
  profile_img_url?: string | null
}

export interface StudyLogImageResponse {
  id: number
  img_url: string
}

export interface StudyLogAttachmentResponse {
  id: number
  file_name: string
  file_url: string
}

export interface StudyLogDetailResponse {
  id: number
  study_group: number
  author: StudyLogAuthor
  title: string
  content: string
  images: StudyLogImageResponse[]
  attachments: StudyLogAttachmentResponse[]
  ai_summary: string
  created_at: string
  updated_at: string
}
