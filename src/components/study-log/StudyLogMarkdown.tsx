import { MarkdownEditor, Text, LogFileUpload } from '@components'

import type { LogUploadedFile } from '@utils'

interface StudyLogMarkdownProps {
  groupUuid: string
  value: string
  files: LogUploadedFile[]
  onFilesAdded: (newFiles: File[]) => void
  onFileDeleted: (fileId: string) => void
  onChange: (content: string) => void
}

export default function StudyLogMarkdown({
  value,
  files,
  onFilesAdded,
  onFileDeleted,
  onChange,
}: StudyLogMarkdownProps) {
  return (
    <div className="w-full">
      <div className="pt-4 sm:pt-6">
        <Text className="pb-2 text-sm font-medium text-gray-700">내용 </Text>
        <Text className="text-sm font-medium text-red-500">*</Text>

        <MarkdownEditor
          value={value}
          onChange={onChange}
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
        <LogFileUpload
          files={files}
          onFilesAdded={onFilesAdded}
          onFileDeleted={onFileDeleted}
        />
      </div>
    </div>
  )
}
