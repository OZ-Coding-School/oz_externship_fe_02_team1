import { useState } from 'react'

import {
  StudyLogFooter,
  StudyLogHeader,
  StudyLogLayout,
  StudyLogMarkdown,
  StudyLogTitle,
  type LogUploadedFile,
} from '@components'
import { logApi } from '@api'

export const group_uuid = '663a40a5-8a96-442b-aac2-1a4b49598ba8' // 테스트용 고정 UUID

export default function CreateStudyLog() {
  const [uploadedFiles, setUploadedFiles] = useState<LogUploadedFile[]>([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  // todo: api 연결 및 파일 업로드 로직 구현
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    return uploadedFiles
  }

  return (
    <StudyLogLayout
      onSubmit={handleSubmit}
      header={<StudyLogHeader mode="create" />}
      title={<StudyLogTitle value={title} onChange={setTitle} />}
      markdown={
        <StudyLogMarkdown
          group_uuid={group_uuid}
          onFilesChange={setUploadedFiles}
          onChange={setContent}
        />
      }
      footer={<StudyLogFooter isLoading={isLoading} />}
    />
  )
}
