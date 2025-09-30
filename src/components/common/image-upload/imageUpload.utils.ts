import type { RefObject , ChangeEvent, Dispatch, SetStateAction } from 'react'


interface HandleImageDeleteParams {
  onChange: (file: File | null) => void
  setPreview: Dispatch<SetStateAction<string | null>>
  setPreviewName: Dispatch<SetStateAction<string | null>>
  setFileInputKey: Dispatch<SetStateAction<number>>
}

export const handleImageDelete = ({
  onChange,
  setPreview,
  setPreviewName,
  setFileInputKey,
}: HandleImageDeleteParams) => {
  setPreview(null)
  setPreviewName(null)
  onChange?.(null)
  setFileInputKey(Date.now())
}

export interface HandleImageReplaceParams {
  fileInputRef: RefObject<HTMLInputElement | null>
}

export const handleImageReplace = ({
  fileInputRef,
}: HandleImageReplaceParams) => {
  fileInputRef.current?.click()
}

interface ValidateFileParams {
  file: File
}
export const validateFile = ({ file }: ValidateFileParams): boolean => {
  const ALLOWED_TYPES = ['image/jpeg', 'image/png']
  const MAX_SIZE = 5 * 1024 * 1024 // 5MB

  if (!ALLOWED_TYPES.includes(file.type)) {
    alert('JPG 또는 PNG 파일만 업로드 가능합니다.')
    return false
  }

  if (file.size > MAX_SIZE) {
    alert('파일 크기는 최대 5MB까지 가능합니다.')
    return false
  }

  return true
}

interface HandleFileChangeParams {
  event: ChangeEvent<HTMLInputElement>
  onChange: (file: File | null) => void
  setPreview: Dispatch<SetStateAction<string | null>>
  setPreviewName: Dispatch<SetStateAction<string | null>>
  setFileInputKey: Dispatch<SetStateAction<number>>
}

export const handleFileChange = ({
  event,
  onChange,
  setPreview,
  setPreviewName,
  setFileInputKey,
}: HandleFileChangeParams) => {
  const file = event.target.files?.[0]

  if (!file) {
    return
  }

  if (!validateFile({ file })) {
    setFileInputKey(Date.now())
    return
  }

  const reader = new FileReader()
  reader.onloadend = () => {
    setPreview(reader.result as string)
    setPreviewName(file.name)
  }
  reader.readAsDataURL(file)

  onChange?.(file)
}
