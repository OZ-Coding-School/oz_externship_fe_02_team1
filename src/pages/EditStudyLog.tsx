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
const groupUuid = '663a40a5-8a96-442b-aac2-1a4b49598ba8'

export default function EditStudyLog() {
  const [uploadedFiles, setUploadedFiles] = useState<LogUploadedFile[]>([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleFilesAdded = (newFiles: LogUploadedFile[]) => {
    setUploadedFiles((current) => [...current, ...newFiles])
  }

  const handleFileDeleted = (fileId: string) => {
    setUploadedFiles((current) => current.filter((f) => f.id !== fileId))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    console.log({ title, content, uploadedFiles })
  }

  return (
    <StudyLogLayout
      onSubmit={handleSubmit}
      header={<StudyLogHeader mode="edit" />}
      title={<StudyLogTitle value={title} onChange={setTitle} />}
      markdown={
        <StudyLogMarkdown
          groupUuid={groupUuid}
          value={content}
          files={uploadedFiles}
          onFilesAdded={handleFilesAdded}
          onFileDeleted={handleFileDeleted}
          onChange={setContent}
        />
      }
      footer={<StudyLogFooter isLoading={isLoading} />}
    />
  )
}
