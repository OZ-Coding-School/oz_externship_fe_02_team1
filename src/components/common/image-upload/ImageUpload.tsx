import { useRef, useState } from 'react'
import { Button, Text } from '@/components'
import { ImageUploadIcon } from '@/assets'
import {
  handleFileChange,
  handleImageDelete,
  handleImageChange,
} from '@/components'

export default function ImageUpload() {
  const [image, setImage] = useState<string | null>(null)
  const [imageName, setImageName] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-6.5">
      {image && imageName ? (
        <>
          <img src={image} alt={imageName} />
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
        className="hidden"
        ref={fileInputRef}
      />
    </div>
  )
}
