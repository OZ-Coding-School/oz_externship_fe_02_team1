import { v4 as uuidv4 } from 'uuid'

import {
  ALLOWED_FILE_TYPES,
  ERROR_MESSAGES,
  MAX_FILE_COUNT,
  MAX_FILE_SIZE_BYTES,
} from '@constants'

export interface LogUploadedFile {
  id: string
  file: File
  url?: string
}

// 파일 유효성 검사
export const checkValidateFile = (file: File): string | null => {
  if (file.size > MAX_FILE_SIZE_BYTES) {
    return ERROR_MESSAGES.FILE_TOO_LARGE(file)
  }
  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return ERROR_MESSAGES.UNSUPPORTED_TYPE(file)
  }
  return null
}

// 최대 파일 개수 체크
export const checkMaxFileCount = (
  currentFiles: LogUploadedFile[],
  newFiles: File[]
): string | null => {
  if (currentFiles.length + newFiles.length > MAX_FILE_COUNT) {
    return ERROR_MESSAGES.MAX_COUNT()
  }
  return null
}

// 중복 파일 검사
export const isDuplicate = (
  file: File,
  existingFiles: LogUploadedFile[]
): boolean => {
  return existingFiles.some(
    (f) => f.file.name === file.name && f.file.size === file.size
  )
}

// 신규 파일 처리 (순수 함수)
export const processNewFiles = (
  newFiles: File[],
  currentFiles: LogUploadedFile[]
): { filesToAdd: LogUploadedFile[]; errors: string[] } => {
  const errors: string[] = []

  // 1) 유효성 검사
  const validFiles = newFiles.filter((file) => {
    const error = checkValidateFile(file)
    if (error) {
      errors.push(error)
      return false
    }
    return true
  })

  // 2) 최대 파일 개수 체크
  const maxFileCountError = checkMaxFileCount(currentFiles, validFiles)
  if (maxFileCountError) {
    errors.push(maxFileCountError)
    return { filesToAdd: [], errors } // 최대 개수 초과 시 파일 추가 중단
  }

  // 3) 중복 검사 및 제거
  const uniqueNewFiles: File[] = []
  validFiles.forEach((file) => {
    if (isDuplicate(file, currentFiles)) {
      errors.push(ERROR_MESSAGES.DUPLICATE(file))
    } else {
      uniqueNewFiles.push(file)
    }
  })

  // 4) ID 부여
  const filesToAdd: LogUploadedFile[] = uniqueNewFiles.map((file) => ({
    id: uuidv4(),
    file,
  }))

  return { filesToAdd, errors }
}

// 파일 추가 처리 핸들러 (Side Effect 담당)
export const handleFileProcessing = (
  newFiles: File[],
  currentFiles: LogUploadedFile[],
  setFiles: React.Dispatch<React.SetStateAction<LogUploadedFile[]>>,
  onChange: (files: LogUploadedFile[]) => void,
  onError: (message: string) => void
) => {
  const { filesToAdd, errors } = processNewFiles(newFiles, currentFiles)

  if (errors.length > 0) {
    onError(errors.join('\n'))
  }

  if (filesToAdd.length > 0) {
    const updatedFiles = [...currentFiles, ...filesToAdd]
    setFiles(updatedFiles)
    onChange(updatedFiles)
  }
}

// 파일 삭제
export const handleFileDelete = (
  id: string,
  files: LogUploadedFile[],
  setFiles: React.Dispatch<React.SetStateAction<LogUploadedFile[]>>,
  onChange: (files: LogUploadedFile[]) => void
) => {
  const updatedFiles = files.filter((f) => f.id !== id)
  setFiles(updatedFiles)
  onChange(updatedFiles)
}

// 드래그 상태
export const handleFileDrag = (
  e: React.DragEvent<HTMLDivElement>,
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>
) => {
  e.preventDefault()
  e.stopPropagation()
  setIsDragging(true)
}

// 파일 드롭
export const handleFileDrop = (
  e: React.DragEvent<HTMLDivElement>,
  onFilesAdded: (files: File[]) => void,
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>
) => {
  e.preventDefault()
  e.stopPropagation()
  setIsDragging(false)

  if (!e.dataTransfer.files) return
  const droppedFiles = Array.from(e.dataTransfer.files)
  onFilesAdded(droppedFiles)
}

// 파일 크기 포맷
export const formatFileSize = (size: number): string => {
  if (size >= 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(2)} MB`
  if (size >= 1024) return `${(size / 1024).toFixed(2)} KB`
  return `${size} B`
}
