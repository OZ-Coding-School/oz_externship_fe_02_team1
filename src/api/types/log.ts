export interface CreateStudyLogRequest {
  title: string
  content: string
  imageFiles: string[]
  attachmentFiles: string[]
}

export interface CreateStudyLogResponse {
  id: number
  studyGroup: string
  author: {
    id: number
    nickname: string
    profileImgUrl: string
  }
  title: string
  content: string
  images: string[]
  attachments: string[]
  aiSummary: string
  createdAt: string
  updatedAt: string
}

export interface UploadLogFileRequest {
  imageFiles: string[]
  attachmentFiles: string[]
}

export interface UploadLogFileResponse {
  images: string[]
  attachments: string[]
  failed: string[]
}
