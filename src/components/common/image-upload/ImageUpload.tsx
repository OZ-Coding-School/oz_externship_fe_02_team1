import { useEffect, useRef, useState } from 'react'

import { ImageUploadIcon } from '@/assets'
import {
  Button,
  Text,
  handleFileChange,
  handleImageDelete,
  handleImageChange,
} from '@/components'
import { cn } from '@/utils'

interface ImageUploadProps {
  value?: string | null
  name?: string | null
  onChange?: (fileUrl: string | null, fileName: string | null) => void
  className?: string
}

export default function ImageUpload({
  value = null,
  name = null,
  onChange,
  className,
}: ImageUploadProps) {
  const [image, setImage] = useState<string | null>(value)
  const [imageName, setImageName] = useState<string | null>(name)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setImage(value)
    setImageName(name)
  }, [value, name])

  useEffect(() => {
    onChange?.(image, imageName)
  }, [image, imageName, onChange])

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-6.5',
        className
      )}
    >
      {image && imageName ? (
        <>
          <img className="max-h-120" src={image} alt={imageName} />
          <div className="mt-4 flex gap-4">
            <Button
              variant="secondary"
              size="small"
              onClick={() =>
                handleImageDelete({ setImage, setImageName, fileInputRef })
              }
            >
              이미지 삭제
            </Button>
            <Button
              size="small"
              onClick={() => handleImageChange(fileInputRef)}
            >
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
        onChange={(event) =>
          handleFileChange({ event, setImage, setImageName, fileInputRef })
        }
        onClick={(e) => {
          ;(e.target as HTMLInputElement).value = ''
        }}
        className="hidden"
        ref={fileInputRef}
      />
    </div>
  )
}
