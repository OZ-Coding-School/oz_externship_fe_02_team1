export interface CreateStudyLogRequest {
  title: string
  content: string
  imageFiles: string[]
  attachmentFiles: string[]
}

export interface UploadLogFileResponse {
  images: string[]
  attachments: string[]
  failed: string[]
}

export interface StudyLogAuthor {
  id: number
  nickname: string
  profileImgUrl?: string | null
}

export interface StudyLogImageResponse {
  id: number
  imgUrl: string
}

export interface StudyLogAttachmentResponse {
  id: number
  fileName: string
  fileUrl: string
}

export interface StudyLogDetailResponse {
  id: number
  studyGroup: number
  author: StudyLogAuthor
  title: string
  content: string
  images: StudyLogImageResponse[]
  attachments: StudyLogAttachmentResponse[]
  aiSummary: string
  createdAt: string
  updatedAt: string
}

export type CreateStudyLogResponse = StudyLogDetailResponse

export interface StudyLogListResponse {
  id: number
  title: string
  author: {
    id: number
    nickname: string
    profileImgUrl?: string | null
  }
  created_at: string
}
