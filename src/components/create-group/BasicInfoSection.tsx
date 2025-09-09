import { useEffect, useState } from 'react'

import { Input, MarkdownEditor } from '@components'
import { H2 } from '@components'
import ImageUpload from '@components/common/image-upload/ImageUpload'

interface Props {
  groupName: string
  description?: string
  onChangeGroupName: (v: string) => void
  onChangeDescription: (v: string) => void
}

const BasicInfoSection = ({
  groupName,
  description,
  onChangeGroupName,
  onChangeDescription,
}: Props) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [imageName, setImageName] = useState<string | null>(null)

  const handleImageChange = (file: File | null) => {
    if (!file) {
      setImagePreview(null)
      setImageName(null)
      return
    }
    const url = URL.createObjectURL(file)
    setImagePreview(url)
    setImageName(file.name)
  }

  // 메모리 누수 방지: imagePreview가 변경되거나 컴포넌트 언마운트 시 해제
  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview)
      }
    }
  }, [imagePreview])

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <H2 className="mb-4">기본 정보</H2>

      <div className="space-y-6">
        <Input
          label="스터디 그룹명"
          placeholder="스터디 그룹의 이름을 입력하세요"
          value={groupName}
          onChange={(e) => onChangeGroupName(e.target.value)}
          aria-label="스터디 그룹명"
        />

        <div>
          <label className="mb-1.5 block text-sm text-gray-700">
            스터디 소개 (선택사항)
          </label>
          <MarkdownEditor
            value={description ?? ''}
            onChange={onChangeDescription}
            className="mt-2"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm text-gray-700">
            스터디 대표 이미지 (선택)
          </label>
          <ImageUpload
            value={imagePreview}
            name={imageName}
            onChange={handleImageChange}
            className="mt-2"
          />
        </div>
      </div>
    </section>
  )
}

export default BasicInfoSection
