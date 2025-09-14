import { Card, Input, MarkdownEditor, Text, ImageUpload } from '@components'
import { useState } from 'react'

export default function PrimaryInfoSection() {
  const [description, setDescription] = useState<string>('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  const handleImageChange = (file: File | null) => {
    setImageFile(file)

    if (file) {
      setImageUrl(URL.createObjectURL(file))
    } else {
      setImageUrl(null)
    }
  }

  return (
    <Card
      title="기본 정보"
      titleClassName="text-xl pb-0"
      cardClassName="p-8 gap-6"
    >
      <Input label="스터디 그룹명" isRequired className="mt-0.5" />

      <div>
        <Text className="mb-2 text-sm text-gray-700">
          스터디 그룹 소개 (선택사항)
        </Text>
        <MarkdownEditor value={description} onChange={setDescription} />
      </div>

      <ImageUpload
        value={imageUrl}
        name={imageFile?.name || 'Default Image'}
        onChange={handleImageChange}
      />
    </Card>
  )
}
