import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { logApi } from '@api'
import {
  StudyLogFooter,
  StudyLogHeader,
  StudyLogLayout,
  StudyLogMarkdown,
  StudyLogTitle,
} from '@components'
import { usePageNav } from '@hooks'

import type { LogUploadedFile } from '@utils'

export default function CreateStudyLog() {
  const { groupId } = useParams<{ groupId: string }>()
  const [uploadedFiles, setUploadedFiles] = useState<LogUploadedFile[]>([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { navigateToLogDetail, handleGoBack } = usePageNav()

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
      if (!groupId) {
        throw new Error('스터디 그룹 ID가 없습니다.')
      }

      // 1. 업로드할 모든 파일들을 하나의 배열로 만듭니다.
      const filesToUpload = uploadedFiles.map((f) => f.file)

      // 2. 파일 업로드 API를 한 번만 호출하여 모든 파일의 URL을 받아옵니다.
      const { images: imageUrls, attachments: attachmentUrls } =
        await logApi.uploadFiles(filesToUpload, groupId)

      // 3. 받아온 URL로 스터디 기록 생성을 요청합니다.
      const response = await logApi.createStudyLog(groupId, {
        title,
        content,
        imageFiles: imageUrls,
        attachmentFiles: attachmentUrls,
      })
      console.log('스터디 기록 생성 성공:', response)
      navigateToLogDetail(groupId, response.id)
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
          groupUuid={groupId!}
          value={content}
          files={uploadedFiles}
          onFilesAdded={handleFilesAdded}
          onFileDeleted={handleFileDeleted}
          onChange={setContent}
        />
      }
      footer={<StudyLogFooter onCancel={handleGoBack} isLoading={isLoading} />}
    />
  )
}
