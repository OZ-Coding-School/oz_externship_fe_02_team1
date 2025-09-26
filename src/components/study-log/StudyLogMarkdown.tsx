import { useState, useEffect } from 'react'

import {
  MarkdownEditor,
  Text,
  LogFileUpload,
  type LogUploadedFile,
} from '@components'

interface SetUploadedFilesProps {
  group_uuid: string
  onFilesChange: (files: LogUploadedFile[]) => void
  onChange: (content: string) => void
}

export default function StudyLogMarkdown({
  group_uuid,
  onFilesChange,
  onChange,
}: SetUploadedFilesProps) {
  const [description, setDescription] = useState('')

  useEffect(() => {
    onChange(description)
  }, [description, onChange])

  return (
    <div className="w-full">
      <div className="pt-6">
        <Text className="pb-2 text-sm font-medium text-gray-700">내용 </Text>
        <Text className="text-sm font-medium text-red-500">*</Text>

        <MarkdownEditor
          value={description}
          onChange={setDescription}
          placeholder="학습한 내용을 마크다운 형식으로 입력하세요..."
        />
        <Text className="text-xs font-normal text-gray-500">
          마크다운 문법을 사용할 수 있습니다. 이미지는 드래그 앤 드롭으로 첨부할
          수 있습니다
        </Text>
      </div>
      <div className="flex w-full flex-col pt-6">
        <Text className="pb-2 text-sm font-medium text-gray-700">
          첨부 파일
        </Text>
        <LogFileUpload group_uuid={group_uuid} onChange={onFilesChange} />
      </div>
    </div>
  )
}
