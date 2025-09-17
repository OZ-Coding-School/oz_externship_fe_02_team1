import { useState } from 'react'

import { type LogUploadedFile } from '@components'
import {
  CreateStudyLogHeader,
  CreateStudyLogTitle,
  CreateStudyLogMarkdown,
  CreateStudyLogFooter,
} from '@components'

export default function CreateStudyLog() {
  const [uploadedFiles, setUploadedFiles] = useState<LogUploadedFile[]>([])

  // todo: api 연결 및 파일 업로드 로직 구현
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    return uploadedFiles
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl">
      <CreateStudyLogHeader />
      <section className="flex flex-col items-start justify-start rounded-xl border border-gray-200 p-6">
        <CreateStudyLogTitle />
        <CreateStudyLogMarkdown setUploadedFiles={setUploadedFiles} />
      </section>
      <CreateStudyLogFooter />
    </form>
  )
}
