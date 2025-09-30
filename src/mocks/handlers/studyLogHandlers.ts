import { http, HttpResponse, delay, type PathParams } from 'msw'

import { API_BASE_URL } from '@constants'

import type { StudyLogDetailResponse } from '@api'

// 생성된 스터디 기록을 임시로 저장할 Map
const mockStudyLogs = new Map<number, StudyLogDetailResponse>()

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

const createStudyLogHandler = http.post<
  PathParams,
  {
    title: string
    content: string
    image_files: string[]
    attachment_files: string[]
  }
>(`${API_BASE_URL}/study-notes/:groupId/notes`, async ({ request }) => {
  const body = await request.json()

  let fileIdCounter = 0

  const newLog: StudyLogDetailResponse = {
    id: Date.now(),
    studyGroup: 1, // or a mock group id
    author: {
      id: 1,
      nickname: 'mock-user',
      profileImgUrl: 'https://picsum.photos/200',
    },
    title: body.title,
    content: body.content,
    images: body.image_files.map((url) => ({
      id: fileIdCounter++,
      imgUrl: url,
    })),
    attachments: body.attachment_files.map((url, index) => ({
      id: fileIdCounter++,
      fileName: decodeURIComponent(url.split('/').pop() || `file-${index}`),
      fileUrl: url,
    })),
    aiSummary:
      body.title || body.content
        ? `AI 요약: "${body.title}" 주제에 대해 학습했으며, 본문 내용은 "${body.content.substring(0, 30)}..."(으)로 시작합니다.`
        : '입력된 내용이 없어 AI가 요약할 수 없습니다.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  // 생성된 기록을 Map에 저장
  mockStudyLogs.set(newLog.id, newLog)
  await delay(1000)
  return HttpResponse.json(newLog, { status: 201 })
})

const getStudyLogDetailHandler = http.get(
  `${API_BASE_URL}/study-notes/:groupUuid/notes/:noteId`,
  ({ params }) => {
    const { noteId } = params

    const logData = mockStudyLogs.get(Number(noteId))

    if (logData) {
      return HttpResponse.json(logData, { status: 200 })
    }
    return new HttpResponse(null, { status: 404 })
  }
)

const updateStudyLogHandler = http.patch<
  PathParams,
  {
    title: string
    content: string
    image_files: string[]
    attachment_files: string[]
  }
>(
  `${API_BASE_URL}/study-notes/:groupUuid/notes/:noteId`,
  async ({ params, request }) => {
    const { noteId } = params
    const body = await request.json()
    const numericNoteId = Number(noteId)

    const existingLog = mockStudyLogs.get(numericNoteId)

    if (!existingLog) {
      return new HttpResponse(null, { status: 404 })
    }

    // 기존 데이터를 수정된 내용으로 업데이트
    const updatedLog: StudyLogDetailResponse = {
      ...existingLog,
      title: body.title,
      content: body.content,
      images: body.image_files.map((url, i) => ({ id: i + 100, imgUrl: url })),
      attachments: body.attachment_files.map((url, i) => ({
        id: i + 200,
        fileName: decodeURIComponent(url.split('/').pop() || ''),
        fileUrl: url,
      })),
      updatedAt: new Date().toISOString(),
    }

    mockStudyLogs.set(numericNoteId, updatedLog)

    return HttpResponse.json(updatedLog, { status: 200 })
  }
)

// 스터디 기록 삭제 핸들러
const deleteStudyLogHandler = http.delete(
  `${API_BASE_URL}/study-notes/:groupUuid/notes/:noteId`,
  async ({ params }) => {
    const { noteId } = params
    const numericNoteId = Number(noteId)

    if (mockStudyLogs.has(numericNoteId)) {
      mockStudyLogs.delete(numericNoteId)
      await delay(500)
      // 성공 시 204 No Content 응답
      return new HttpResponse(null, { status: 204 })
    }

    return new HttpResponse(null, { status: 404 })
  }
)

export const studyLogHandlers = [
  uploadFileHandler,
  createStudyLogHandler,
  getStudyLogDetailHandler,
  updateStudyLogHandler,
  deleteStudyLogHandler,
]
