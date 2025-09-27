import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  type LogUploadedFile,
  StudyLogHeader,
  StudyLogTitle,
  StudyLogMarkdown,
  StudyLogFooter,
  StudyLogLayout,
} from '@components'
import { usePageNav, useStudyLogDetail } from '@hooks'

export default function EditStudyLog() {
  const { groupId, recordId } = useParams<{
    groupId: string
    recordId: string
  }>()
  const { data: studyLogData, isLoading: isFetching } = useStudyLogDetail(
    groupId!,
    Number(recordId)
  )
  const { handleGoBack } = usePageNav()

  const [uploadedFiles, setUploadedFiles] = useState<LogUploadedFile[]>([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (studyLogData) {
      setTitle(studyLogData.title)
      setContent(studyLogData.content)

      const existingImages =
        studyLogData.images?.map(
          (img): LogUploadedFile => ({
            id: String(img.id),
            file: new File([], img.imgUrl.split('/').pop() || 'image.png'),
            url: img.imgUrl,
          })
        ) || []

      const existingAttachments =
        studyLogData.attachments?.map(
          (att): LogUploadedFile => ({
            id: String(att.id),
            file: new File([], att.fileName),
            url: att.fileUrl,
          })
        ) || []

      setUploadedFiles([...existingImages, ...existingAttachments])
    }
  }, [studyLogData])

  const handleFilesAdded = (newFiles: LogUploadedFile[]) => {
    setUploadedFiles((current) => [...current, ...newFiles])
  }

  const handleFileDeleted = (fileId: string) => {
    setUploadedFiles((current) => current.filter((f) => f.id !== fileId))
  }

  const handleSubmit = (e: React.FormEvent) => {
    // TODO: 수정 API 호출 로직 구현
    e.preventDefault()
    setIsLoading(true)
    console.log({ title, content, uploadedFiles })
    // 예시: navigateToLogDetail(groupId, Number(recordId))
  }

  if (isFetching) {
    return <div>데이터를 불러오는 중...</div>
  }

  return (
    <StudyLogLayout
      onSubmit={handleSubmit}
      header={<StudyLogHeader mode="edit" />}
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
