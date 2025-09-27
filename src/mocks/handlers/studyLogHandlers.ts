import { http, HttpResponse, delay } from 'msw'

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
      (file) => `/mock-images/${encodeURIComponent(file.name)}`
    )
    const attachments = attachmentFiles.map(
      (file) => `/mock-attachments/${encodeURIComponent(file.name)}`
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
        file_name: decodeURIComponent(url.split('/').pop() || `file-${index}`),
        file_url: url, // file_url로 수정
      })),
      // 입력된 제목과 내용을 바탕으로 동적인 AI 요약을 생성합니다.
      ai_summary:
        body.title || body.content
          ? `AI 요약: "${body.title}" 주제에 대해 학습했으며, 본문 내용은 "${body.content.substring(0, 30)}..."(으)로 시작합니다.`
          : '입력된 내용이 없어 AI가 요약할 수 없습니다.',
      created_at: new Date().toISOString(), // created_at로 수정
      updated_at: new Date().toISOString(), // updated_at로 수정
    }

    // 생성된 기록을 Map에 저장
    mockStudyLogs.set(newLog.id, newLog)

    // AI 요약 생성을 시뮬레이션하기 위해 1.5초의 딜레이를 추가합니다.
    await delay(1500)

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
