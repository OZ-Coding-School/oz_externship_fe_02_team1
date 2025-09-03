import React, { useState } from 'react'
import { Text } from '@/components'
import { ImageUploadIcon } from '@/assets'

export default function ImageUpload() {
  const [image, setImage] = useState<string | null>(null)
  const [imageName, setImageName] = useState<string | null>(null)

  const readImage = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-6.5">
      {image && imageName && <img src={image} alt={imageName} />}

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
        <input
          id="file-upload"
          type="file"
          onChange={readImage}
          className="hidden"
        />
      </label>
    </div>
  )
}
