import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  StudyLogFooter,
  StudyLogHeader,
  StudyLogLayout,
  StudyLogMarkdown,
  StudyLogTitle,
  type LogUploadedFile,
} from '@components'
import {
  useCreateStudyLog,
  useUploadFileMutation,
} from '@/hooks/queries/useStudyLogMutations'

export default function CreateStudyLog() {
  // const { id: groupUuid } = useParams<{ id: string }>()
  const groupUuid = '550e8400-e29b-41d4-a716-446655440000'

  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [markdownContent, setMarkdownContent] = useState('')
  const [currentFiles, setCurrentFiles] = useState<LogUploadedFile[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { mutateAsync: uploadFile } = useUploadFileMutation()
  const { mutateAsync: createStudyLog } = useCreateStudyLog()

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 100) {
      setTitle(e.target.value)
    }
  }

  const handleFileSelectionChange = (updatedFiles: LogUploadedFile[]) => {
    setCurrentFiles(updatedFiles)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!groupUuid) {
      alert('스터디 그룹 정보가 올바르지 않습니다.')
      return
    }
    if (!title.trim()) {
      alert('제목을 입력해주세요.')
      return
    }

    setIsSubmitting(true)
    try {
      const uploadedUrls = await Promise.all(
        currentFiles.map((fileWrapper) =>
          uploadFile({ file: fileWrapper.file, groupUuid })
        )
      )

      // 2. 업로드된 URL들을 이미지와 첨부파일로 분류
      const imageFiles: string[] = []
      const attachmentFiles: string[] = []

      currentFiles.forEach((fileWrapper, index) => {
        const url = uploadedUrls[index]
        if (url) {
          if (fileWrapper.file.type.startsWith('image/')) {
            imageFiles.push(url)
          } else {
            attachmentFiles.push(url)
          }
        }
      })

      // 3. 스터디 기록 생성 API 호출 (분류된 파일 URL 전달)
      const newLog = await createStudyLog({
        groupUuid,
        title,
        content: markdownContent,
        imageFiles,
        attachmentFiles,
      })

      alert('스터디 기록이 성공적으로 저장되었습니다!')
      // API 응답에 새로 생성된 로그의 ID (note_id)가 포함되어 있다고 가정합니다.
      navigate(`/study-group/${groupUuid}/log/${newLog.note_id}`)
    } catch (error) {
      console.error('스터디 기록 생성 실패:', error)
      const errorMessage =
        error instanceof Error
          ? error.message
          : '알 수 없는 오류가 발생했습니다.'
      alert(`저장 중 오류가 발생했습니다: ${errorMessage}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <StudyLogLayout
      onSubmit={handleSubmit}
      header={<StudyLogHeader mode="create" />}
      title={<StudyLogTitle value={title} onChange={handleTitleChange} />}
      markdown={
        <StudyLogMarkdown
          content={markdownContent}
          onFileUpload={handleFileSelectionChange}
          onContentChange={setMarkdownContent}
        />
      }
      footer={<StudyLogFooter isSubmitting={isSubmitting} />}
    />
  )
}
