import { useRef, useEffect, useState } from 'react'

import { ImageUploadIcon } from '@/assets'
import { Button } from '@/components/common/button'
import { Text } from '@/components/common/text'
import { cn } from '@/utils'

import {
  handleFileChange,
  handleImageDelete,
  handleImageReplace,
} from '@/components'

import type { ImageUploadProps } from '@/components'

export default function ImageUpload({
  value = null,
  name = null,
  onChange,
  className,
}: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null)
  const [previewName, setPreviewName] = useState<string | null>(null)
  const [fileInputKey, setFileInputKey] = useState<number>(Date.now())
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setPreview(value)
    setPreviewName(name)
  }, [value, name])

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-6.5',
        className
      )}
    >
      {preview && previewName ? (
        <>
          <img className="max-h-120" src={preview} alt={previewName} />
          <div className="mt-4 flex gap-4">
            <Button
              variant="secondary"
              size="small"
              onClick={() =>
                handleImageDelete({
                  onChange,
                  setPreview,
                  setPreviewName,
                  setFileInputKey,
                })
              }
            >
              이미지 삭제
            </Button>
            <Button
              size="small"
              onClick={() => handleImageReplace({ fileInputRef })}
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
        key={fileInputKey}
        id="file-upload"
        type="file"
        accept="image/png, image/jpeg"
        onChange={(event) =>
          handleFileChange({
            event,
            onChange,
            setPreview,
            setPreviewName,
            setFileInputKey,
          })
        }
        className="hidden"
        ref={fileInputRef}
      />
    </div>
  )
}
