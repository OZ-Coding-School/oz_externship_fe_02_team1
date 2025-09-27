import { http, HttpResponse } from 'msw'

import { API_BASE_URL } from '@constants'

import type { StudyLogDetailResponse } from '@api'

// 생성된 스터디 기록을 임시로 저장할 Map
const mockStudyLogs = new Map<number, StudyLogDetailResponse>()

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
      image_files: string[]
      attachment_files: string[]
    }

    const newLog: StudyLogDetailResponse = {
      id: Date.now(),
      study_group: 1, // or a mock group id
      author: {
        id: 1,
        nickname: 'mock-user',
        profile_img_url: 'https://example.com/mock-profile.jpg',
      },
      title: body.title,
      content: body.content,
      images: body.image_files.map((url, index) => ({
        id: index,
        img_url: url,
      })),
      attachments: body.attachment_files.map((url, index) => ({
        id: index,
        file_name: url.split('/').pop() || `file-${index}`,
        file_url: url, // file_url로 수정
      })),
      ai_summary: 'This is a mock AI summary.', // ai_summary로 수정
      created_at: new Date().toISOString(), // created_at로 수정
      updated_at: new Date().toISOString(), // updated_at로 수정
    }

    // 생성된 기록을 Map에 저장
    mockStudyLogs.set(newLog.id, newLog)

    return HttpResponse.json(newLog, { status: 201 })
  }
)

// 스터디 기록 상세 정보 핸들러
const getStudyLogDetailHandler = http.get(
  `${API_BASE_URL}/study-notes/:groupId/notes/:noteId`,
  ({ params }) => {
    const { noteId } = params

    // Map에서 noteId에 해당하는 기록을 찾습니다.
    const logData = mockStudyLogs.get(Number(noteId))

    if (logData) {
      return HttpResponse.json(logData, { status: 200 })
    }

    // 해당하는 기록이 없으면 404 에러를 반환합니다.
    return new HttpResponse(null, { status: 404 })
  }
)

export const studyLogHandlers = [
  uploadFileHandler,
  createStudyLogHandler,
  getStudyLogDetailHandler,
]
