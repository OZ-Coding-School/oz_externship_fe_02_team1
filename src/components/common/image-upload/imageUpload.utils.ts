import type {
  ValidateFileParams,
  HandleFileChangeParams,
  HandleImageDeleteParams,
  HandleImageChangeParams,
} from '@/components'

export const handleImageDelete = ({
  onChange,
  formRef,
}: HandleImageDeleteParams) => {
  onChange?.(null)
  formRef.current?.reset()
}

export const handleImageChange = ({
  isResetting,
  formRef,
  fileInputRef,
}: HandleImageChangeParams) => {
  if (fileInputRef.current) {
    isResetting.current = true
    formRef.current?.reset()
    fileInputRef.current.click()
  }
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

export const handleFileChange = ({
  event,
  onChange,
  formRef,
}: HandleFileChangeParams) => {
  const file = event.target.files?.[0]

  if (!file) {
    return
  }

  if (!validateFile({ file })) {
    formRef.current?.reset()
    return
  }

  onChange?.(file)
}
