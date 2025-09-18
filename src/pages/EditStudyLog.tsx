import { useState } from 'react'

import {
  type LogUploadedFile,
  StudyLogHeader,
  StudyLogTitle,
  StudyLogMarkdown,
  StudyLogFooter,
  StudyLogLayout,
} from '@components'

export default function EditStudyLog() {
  const [uploadedFiles, setUploadedFiles] = useState<LogUploadedFile[]>([])

  // todo: api 연결 및 파일 업로드 로직 구현
  // todo: 기존 스터디 로그 데이터 fetch
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    return uploadedFiles
  }

  return (
    <StudyLogLayout
      onSubmit={handleSubmit}
      header={<StudyLogHeader mode="edit" />}
      title={<StudyLogTitle />}
      markdown={<StudyLogMarkdown setUploadedFiles={setUploadedFiles} />}
      footer={<StudyLogFooter />}
    />
  )
}
