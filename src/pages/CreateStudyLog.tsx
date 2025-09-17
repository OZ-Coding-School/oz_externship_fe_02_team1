import { useState } from 'react'

import {
  type LogUploadedFile,
  StudyLogHeader,
  StudyLogTitle,
  StudyLogMarkdown,
  StudyLogFooter,
  StudyLogLayout,
} from '@components'

export default function CreateStudyLog() {
  const [uploadedFiles, setUploadedFiles] = useState<LogUploadedFile[]>([])

  // todo: api 연결 및 파일 업로드 로직 구현
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    return uploadedFiles
  }

  return (
    <StudyLogLayout
      onSubmit={handleSubmit}
      header={<StudyLogHeader mode="create" />}
      title={<StudyLogTitle />}
      markdown={<StudyLogMarkdown setUploadedFiles={setUploadedFiles} />}
      footer={<StudyLogFooter />}
    />
  )
}
