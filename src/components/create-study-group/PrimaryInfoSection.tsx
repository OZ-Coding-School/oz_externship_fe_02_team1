import { useEffect, useState } from 'react'

import { Card, Input, MarkdownEditor, Text, ImageUpload } from '@components'

interface PrimaryInfoSectionProps {
  groupName: string
  description: string
  imageFile: File | null
  onChangeGroupName: (value: string) => void
  onChangeDescription: (value: string) => void
  onChangeImage: (file: File | null) => void
}

export default function PrimaryInfoSection({
  groupName,
  description,
  imageFile,
  onChangeGroupName,
  onChangeDescription,
  onChangeImage,
}: PrimaryInfoSectionProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  useEffect(() => {
    if (imageFile) {
      const url = URL.createObjectURL(imageFile)
      setImageUrl(url)

      return () => URL.revokeObjectURL(url)
    }
    setImageUrl(null)
  }, [imageFile])

  return (
    <Card
      title="기본 정보"
      titleClassName="text-xl pb-0"
      cardClassName="lg:p-8 gap-6"
    >
      <Input
        label="스터디 그룹명"
        placeholder="스터디 그룹의 이름을 입력하세요"
        isRequired
        className="mt-0.5"
        value={groupName}
        onChange={(e) => onChangeGroupName(e.target.value)}
      />

      <div>
        <Text className="mb-2 text-sm text-gray-700">
          스터디 그룹 소개 (선택사항)
        </Text>
        <MarkdownEditor value={description} onChange={onChangeDescription} />
      </div>

      <ImageUpload
        value={imageUrl}
        name={imageFile?.name || 'Default Image'}
        onChange={onChangeImage}
      />
    </Card>
  )
}
