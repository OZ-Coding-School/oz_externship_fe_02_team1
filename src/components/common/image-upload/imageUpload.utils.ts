import React from 'react'
import type { ReadImageParams, ImageDeleteParams } from '@/components'

export const hanldleReadImage = ({
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
