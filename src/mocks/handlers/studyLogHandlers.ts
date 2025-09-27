import { http, HttpResponse } from 'msw'

import { API_BASE_URL, API_PATHS } from '@constants'

import { groupUuid } from '@/pages/CreateStudyLog'

// 스터디 로그 파일 업로드 핸들러
const uploadFileHandler = http.post(
  `${API_BASE_URL}/study-notes/:groupId/upload`,
  async ({ request }) => {
    const formData = await request.formData()
    const imageFiles = formData.getAll('image_files') as File[]
    const attachmentFiles = formData.getAll('attachment_files') as File[]

    if (imageFiles.length === 0 && attachmentFiles.length === 0) {
      return new HttpResponse(null, {
        status: 400,
        statusText: 'Files not found',
      })
    }

    const images = imageFiles.map(
      (file) =>
        `https://example.com/mock-images/${encodeURIComponent(file.name)}`
    )
    const attachments = attachmentFiles.map(
      (file) =>
        `https://example.com/mock-attachments/${encodeURIComponent(file.name)}`
    )

    return HttpResponse.json({ images, attachments }, { status: 200 })
  }
)

// 스터디 기록 생성 핸들러
const createStudyLogHandler = http.post(
  `${API_BASE_URL}/study-notes/:groupId/notes/`,
  async ({ request }) => {
    const body = (await request.json()) as {
      title: string
      content: string
      imageFiles: string[]
      attachmentFiles: string[]
    }

    const response = {
      id: Date.now(),
      studyGroup: 'mock-group-uuid',
      author: {
        id: 1,
        nickname: 'mock-user',
        profileImgUrl: 'https://example.com/mock-profile.jpg',
      },
      title: body.title,
      content: body.content,
      images: body.imageFiles,
      attachments: body.attachmentFiles,
      aiSummary: 'This is a mock AI summary.',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    return HttpResponse.json(response, { status: 201 })
  }
)

export const studyLogHandlers = [uploadFileHandler, createStudyLogHandler]
