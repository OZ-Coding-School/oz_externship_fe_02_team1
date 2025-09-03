import React from 'react'

import type {
  ReadImageParams,
  ImageDeleteParams,
  HandleFileChangeParams,
} from '@/components'

export const readImage = ({
  event,
  onChange,
}: ReadImageParams) => {
  const file = event.target.files?.[0]
  if (!file) return

  const reader = new FileReader()

  reader.onloadend = () => {
    if (typeof reader.result === 'string') {
      onChange?.(reader.result, file.name)
    }
  }

  reader.readAsDataURL(file)
}

export const handleImageDelete = ({
  onChange,
  fileInputRef,
}: ImageDeleteParams) => {
  onChange?.(null, null)

  if (fileInputRef.current) {
    fileInputRef.current.value = ''
  }
}

export const handleImageChange = (
  fileInputRef: React.RefObject<HTMLInputElement | null>
) => {
  if (fileInputRef.current) {
    fileInputRef.current.click()
  }
}

export const validateFile = (file: File) => {
  const ALLOWED_TYPES = ['image/jpeg', 'image/png']
  const MAX_SIZE = 5 * 1024 * 1024

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
  fileInputRef,
}: HandleFileChangeParams) => {
  const file = event.target.files?.[0]
  if (!file) return

  if (!validateFile(file)) {
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    return
  }

  readImage({ event, onChange })
}
