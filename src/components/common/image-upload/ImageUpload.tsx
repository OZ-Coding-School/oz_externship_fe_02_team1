import { useRef } from 'react'

import { ImageUploadIcon } from '@/assets'
import {
  handleFileChange,
  handleImageDelete,
  handleImageReplace,
} from '@/components'
import { Button } from '@/components/common/button'
import { Text } from '@/components/common/text'
import { cn } from '@/utils'

interface ImageUploadProps {
  value?: string | null
  name?: string | null
  onChange?: (file: File | null) => void
  className?: string
}

export default function ImageUpload({
  value = null,
  name = null,
  onChange,
  className,
}: ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isResetting = useRef(false)

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-6.5',
        className
      )}
    >
      {value && name ? (
        <>
          <img className="max-h-120" src={value} alt={name} />
          <div className="mt-4 flex gap-4">
            <Button
              variant="secondary"
              size="small"
              onClick={() => handleImageDelete({ onChange, formRef })}
            >
              이미지 삭제
            </Button>
            <Button
              size="small"
              onClick={() =>
                handleImageReplace({ isResetting, formRef, fileInputRef })
              }
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
      <form ref={formRef}>
        <input
          id="file-upload"
          type="file"
          accept="image/png, image/jpeg"
          onChange={(event) =>
            handleFileChange({ event, isResetting, onChange, formRef })
          }
          className="hidden"
          ref={fileInputRef}
        />
      </form>
    </div>
  )
}
