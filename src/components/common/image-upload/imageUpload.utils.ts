import React from 'react'
import type {
  ReadImageParams,
  ImageDeleteParams,
  HandleFileChangeParams,
} from '@/components'

export const readImage = ({
  event,
  setImage,
  setImageName,
}: ReadImageParams) => {
  const file = event.target.files?.[0]
  if (!file) return

  const reader = new FileReader()

  reader.onloadend = () => {
    if (typeof reader.result === 'string') {
      setImage(reader.result)
      setImageName(file.name)
    }
  }

  reader.readAsDataURL(file)
}

export const handleImageDelete = ({
  setImage,
  setImageName,
  fileInputRef,
}: ImageDeleteParams) => {
  setImage(null)
  setImageName(null)

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
  const allowedTypes = ['image/jpeg', 'image/png']
  const maxSize = 5 * 1024 * 1024

  if (!allowedTypes.includes(file.type)) {
    alert('JPG 또는 PNG 파일만 업로드 가능합니다.')
    return false
  }

  if (file.size > maxSize) {
    alert('파일 크기는 최대 5MB까지 가능합니다.')
    return false
  }

  return true
}

export const handleFileChange = ({
  event,
  setImage,
  setImageName,
  fileInputRef,
}: HandleFileChangeParams) => {
  const file = event.target.files?.[0]
  if (!file) return

  if (!validateFile(file)) {
    if (fileInputRef.current) fileInputRef.current.value = ''
    return
  }

  readImage({ event, setImage, setImageName })
}
