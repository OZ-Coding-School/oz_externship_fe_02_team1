import {
  ALLOWED_FILE_TYPES,
  MAX_FILE_COUNT,
  MAX_FILE_SIZE_BYTES,
  MAX_FILE_SIZE_MB,
} from '@constants'

export const checkValidateFile = (file: File): string | null => {
  if (file.size > MAX_FILE_SIZE_BYTES) {
    return `${file.name} 크기가 너무 큽니다. (최대 ${MAX_FILE_SIZE_MB}MB)`
  }
  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return `${file.name}은(는) 지원하지 않는 파일 형식입니다.`
  }
  return null
}

export const isDuplicate = (file: File, existingFiles: File[]): boolean => {
  return existingFiles.some((f) => f.name === file.name && f.size === file.size)
}

export const checkMaxFileCount = (
  currentFiles: File[],
  newFiles: File[],
  maxCount: number
): string | null => {
  if (currentFiles.length + newFiles.length > maxCount) {
    return `파일은 최대 ${maxCount}개까지 업로드할 수 있습니다.`
  }
  return null
}

export const handleFileProcessing = (
  newFiles: File[],
  currentFiles: File[],
  setFiles: React.Dispatch<React.SetStateAction<File[]>>,
  onChange: (files: File[]) => void,
  onError: (message: string) => void
) => {
  const validationErrors: string[] = []
  const validFiles = newFiles.filter((file) => {
    const error = checkValidateFile(file)
    if (error) {
      validationErrors.push(error)
    }
    return !error
  })

  if (validationErrors.length > 0) {
    onError(validationErrors.join('\n'))
  }

  const maxFileCountError = checkMaxFileCount(
    currentFiles,
    validFiles,
    MAX_FILE_COUNT
  )
  if (maxFileCountError) {
    onError(maxFileCountError)
    return
  }

  const uniqueNewFiles = validFiles.filter((file) => {
    const duplicate = isDuplicate(file, currentFiles)
    if (duplicate) {
      onError(`${file.name} 파일은 이미 추가되었습니다.`)
    }
    return !duplicate
  })

  if (uniqueNewFiles.length > 0) {
    const updatedFiles = [...currentFiles, ...uniqueNewFiles]
    setFiles(updatedFiles)
    onChange(updatedFiles)
  }
}

export const handleFileDelete = (
  index: number,
  files: File[],
  setFiles: React.Dispatch<React.SetStateAction<File[]>>,
  onChange: (files: File[]) => void
) => {
  const updatedFiles = files.filter((_, i) => i !== index)
  setFiles(updatedFiles)
  onChange(updatedFiles)
}

export const handleFileDrag = (
  e: React.DragEvent<HTMLDivElement>,
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>
) => {
  e.preventDefault()
  e.stopPropagation()
  setIsDragging(true)
}

export const handleFileDrop = (
  e: React.DragEvent<HTMLDivElement>,
  files: File[],
  setFiles: React.Dispatch<React.SetStateAction<File[]>>,
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>,
  onChange: (files: File[]) => void,
  onError: (message: string) => void
) => {
  e.preventDefault()
  e.stopPropagation()
  setIsDragging(false)

  if (!e.dataTransfer.files) return
  const droppedFiles = Array.from(e.dataTransfer.files)
  handleFileProcessing(droppedFiles, files, setFiles, onChange, onError)
}
