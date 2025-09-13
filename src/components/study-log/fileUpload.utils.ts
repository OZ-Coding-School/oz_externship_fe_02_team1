import {
  ALLOWED_FILE_TYPES,
  ERROR_MESSAGES,
  MAX_FILE_COUNT,
  MAX_FILE_SIZE_BYTES,
} from '@constants'

export const checkValidateFile = (file: File): string | null => {
  if (file.size > MAX_FILE_SIZE_BYTES) {
    return ERROR_MESSAGES.FILE_TOO_LARGE(file)
  }
  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return ERROR_MESSAGES.UNSUPPORTED_TYPE(file)
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
    return ERROR_MESSAGES.MAX_COUNT()
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
      onError(ERROR_MESSAGES.DUPLICATE(file))
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

export const formatFileSize = (size: number): string => {
  if (size >= 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(2)} MB`
  if (size >= 1024) return `${(size / 1024).toFixed(2)} KB`
  return `${size} B`
}
