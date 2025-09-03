import React, { useRef, useState } from 'react'
import { Button, Text } from '@/components'
import { ImageUploadIcon } from '@/assets'

export default function ImageUpload() {
  const [image, setImage] = useState<string | null>(null)
  const [imageName, setImageName] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageRead = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()

    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setImage(reader.result)
      }
    }

    reader.readAsDataURL(file)
    setImageName(file.name)
  }

  const handleImageDelete = () => {
    setImage(null)
    setImageName(null)

    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleImageChange = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-6.5">
      {image && imageName ? (
        <>
          <img src={image} alt={imageName} />
          <div className="mt-4 flex gap-4">
            <Button
              variant="secondary"
              size="small"
              onClick={handleImageDelete}
            >
              이미지 삭제
            </Button>
            <Button size="small" onClick={handleImageChange}>
              이미지 변경
            </Button>
          </div>
        </>
      ) : (
        <label
          htmlFor="file-upload"
          className="flex w-full cursor-pointer flex-col items-center justify-center"
        >
          <ImageUploadIcon />
          <Text className="text-gray-600" variant="small">
            클릭하여 이미지 업로드
          </Text>
          <Text className="mt-1 text-gray-400" variant="extraSmall">
            JPG, PNG (최대 5MB)
          </Text>
        </label>
      )}
      <input
        id="file-upload"
        type="file"
        onChange={handleImageRead}
        className="hidden"
        ref={fileInputRef}
      />
    </div>
  )
}
