import { formatFileSize } from '@utils'

export const MAX_FILE_SIZE_MB = 10
export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024
export const MAX_FILE_COUNT = 3

export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png']

export const ALLOWED_ATTACHMENT_TYPES = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation', // pptx
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // docx
  'text/plain',
  'application/zip',
]

export const ALLOWED_FILE_TYPES = [
  ...ALLOWED_IMAGE_TYPES,
  ...ALLOWED_ATTACHMENT_TYPES,
]

export const ERROR_MESSAGES = {
  FILE_TOO_LARGE: (file: File) =>
    `${file.name} (${formatFileSize(file.size)}) 크기가 너무 큽니다. (최대 ${MAX_FILE_SIZE_MB}MB)`,
  UNSUPPORTED_TYPE: (file: File) =>
    `${file.name}은(는) 지원하지 않는 파일 형식입니다.`,
  DUPLICATE: (file: File) => `${file.name}은(는) 이미 업로드된 파일입니다.`,
  MAX_COUNT: () =>
    `파일은 최대 ${MAX_FILE_COUNT}개까지만 업로드할 수 있습니다.`,
}
