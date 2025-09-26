import { useState } from 'react'

import { logApi } from '@api'
import {
  StudyLogFooter,
  StudyLogHeader,
  StudyLogLayout,
  StudyLogMarkdown,
  StudyLogTitle,
  type LogUploadedFile,
} from '@components'

import { usePageNav } from '@/hooks'

export const groupUuid = '663a40a5-8a96-442b-aac2-1a4b49598ba8' // 테스트용 고정 UUID

export default function CreateStudyLog() {
  const [uploadedFiles, setUploadedFiles] = useState<LogUploadedFile[]>([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { navigateToLogDetail } = usePageNav()

  const handleFilesAdded = (newFiles: LogUploadedFile[]) => {
    setUploadedFiles((current) => [...current, ...newFiles])
  }

  const handleFileDeleted = (fileId: string) => {
    setUploadedFiles((current) => current.filter((f) => f.id !== fileId))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const imageFiles: string[] = []
      const attachmentFiles: string[] = []

      uploadedFiles.forEach((uploadedFile) => {
        if (uploadedFile.url) {
          if (uploadedFile.file.type.startsWith('image/')) {
            imageFiles.push(uploadedFile.url)
          } else {
            attachmentFiles.push(uploadedFile.url)
          }
        }
      })

      const response = await logApi.createStudyLog(groupUuid, {
        title,
        content,
        imageFiles,
        attachmentFiles,
      })
      console.log('스터디 기록 생성 성공:', response)
      navigateToLogDetail()
    } catch (error) {
      console.error('스터디 기록 생성 실패:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <StudyLogLayout
      onSubmit={handleSubmit}
      header={<StudyLogHeader mode="create" />}
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
