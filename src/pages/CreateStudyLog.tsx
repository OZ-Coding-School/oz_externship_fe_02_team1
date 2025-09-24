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
  const { id: group_uuid } = useParams<{ id: string }>()
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
    if (!group_uuid) {
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
          uploadFile({ file: fileWrapper.file, group_uuid })
        )
      )

      // 2. 업로드된 URL들을 이미지와 첨부파일로 분류
      const image_files: string[] = []
      const attachment_files: string[] = []

      currentFiles.forEach((fileWrapper, index) => {
        const url = uploadedUrls[index]
        if (url) {
          if (fileWrapper.file.type.startsWith('image/')) {
            image_files.push(url)
          } else {
            attachment_files.push(url)
          }
        }
      })

      // 3. 스터디 기록 생성 API 호출 (분류된 파일 URL 전달)
      const newLog = await createStudyLog({
        group_uuid,
        title,
        content: markdownContent,
        image_files,
        attachment_files,
      })

      alert('스터디 기록이 성공적으로 저장되었습니다!')
      // API 응답에 새로 생성된 로그의 ID (note_id)가 포함되어 있다고 가정합니다.
      navigate(`/study-group/${group_uuid}/log/${newLog.note_id}`)
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
