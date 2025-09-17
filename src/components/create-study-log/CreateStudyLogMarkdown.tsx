import { useState } from 'react'

import { MarkdownEditor, Text } from '@components'

import LogFileUpload from './LogFileUpload'

import type { LogUploadedFile } from './logFileUpload.utils'

interface SetUploadedFilesProps {
  setUploadedFiles: (files: LogUploadedFile[]) => void
}

export default function CreateStudyLogMarkdown({
  setUploadedFiles,
}: SetUploadedFilesProps) {
  const [description, setDescription] = useState('')
  const handleFilesChange = (files: LogUploadedFile[]) => {
    setUploadedFiles(files)
  }

  return (
    <div className="w-full">
      <div className="pt-6">
        <Text className="pb-2 text-sm font-medium text-gray-700">내용 </Text>
        <Text className="text-sm font-medium text-red-500">*</Text>

        <MarkdownEditor value={description} onChange={setDescription} />
        <Text className="text-xs font-normal text-gray-500">
          마크다운 문법을 사용할 수 있습니다. 이미지는 드래그 앤 드롭으로 첨부할
          수 있습니다
        </Text>
      </div>
      <div className="flex w-full flex-col pt-6">
        <Text className="pb-2 text-sm font-medium text-gray-700">
          첨부 파일
        </Text>
        <LogFileUpload onChange={handleFilesChange} />
      </div>
    </div>
  )
}
