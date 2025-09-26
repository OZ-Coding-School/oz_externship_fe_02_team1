import { useState } from 'react'

import {
  type LogUploadedFile,
  StudyLogHeader,
  StudyLogTitle,
  StudyLogMarkdown,
  StudyLogFooter,
  StudyLogLayout,
} from '@components'

// 임시 UUID, 나중에 동적으로 받아와야 합니다.
const group_uuid = '663a40a5-8a96-442b-aac2-1a4b49598ba8'

export default function EditStudyLog() {
  const [uploadedFiles, setUploadedFiles] = useState<LogUploadedFile[]>([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // todo: api 연결 및 파일 업로드 로직 구현
  // todo: 기존 스터디 로그 데이터 fetch해서 title, content, uploadedFiles 상태 초기화
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // setIsLoading(true) 등 로직 추가 필요
    console.log({ title, content, uploadedFiles })
  }

  return (
    <StudyLogLayout
      onSubmit={handleSubmit}
      header={<StudyLogHeader mode="edit" />}
      title={<StudyLogTitle value={title} onChange={setTitle} />}
      markdown={
        <StudyLogMarkdown
          group_uuid={group_uuid}
          value={content}
          onFilesChange={setUploadedFiles}
          onChange={setContent}
        />
      }
      footer={<StudyLogFooter isLoading={isLoading} />}
    />
  )
}
