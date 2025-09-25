import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
import type { FileUploadFormDataTypes } from '@/utils/form'

export default function CreateStudyLog() {
  const groupUuid = '663a40a5-8a96-442b-aac2-1a4b49598ba8'
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [markdownContent, setMarkdownContent] = useState('')
  const [currentFiles, setCurrentFiles] = useState<FileUploadFormDataTypes[]>(
    []
  )
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { mutateAsync: uploadFile } = useUploadFileMutation()
  const { mutateAsync: createStudyLog } = useCreateStudyLog()

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 100) {
      setTitle(e.target.value)
    }
  }

  const handleFileSelectionChange = async (
    selectedFiles: FileUploadFormDataTypes[]
  ) => {
    const uploadedFiles: FileUploadFormDataTypes[] = []

    for (const fileWrapper of selectedFiles) {
      try {
        const url = await uploadFile({ file: fileWrapper.file, groupUuid })
        uploadedFiles.push({ ...fileWrapper, url }) // 업로드 성공 시 URL 추가
      } catch (error) {
        console.error(`${fileWrapper.file.name} 업로드 실패`, error)
        alert(`${fileWrapper.file.name} 업로드 실패`)
      }
    }

    setCurrentFiles((prev) => [...prev, ...uploadedFiles])
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
      // 이미 업로드된 URL이 currentFiles에 있음
      const imageFiles: string[] = []
      const attachmentFiles: string[] = []

      currentFiles.forEach((fileWrapper) => {
        if (fileWrapper.url) {
          if (fileWrapper.file.type.startsWith('image/')) {
            imageFiles.push(fileWrapper.url)
          } else {
            attachmentFiles.push(fileWrapper.url)
          }
        }
      })

      const newLog = await createStudyLog({
        groupUuid,
        title,
        content: markdownContent,
        imageFiles,
        attachmentFiles,
      })

      alert('스터디 기록이 성공적으로 저장되었습니다!')
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
          onFileUpload={handleFileSelectionChange} // 파일 선택 즉시 업로드
          onContentChange={setMarkdownContent}
        />
      }
      footer={<StudyLogFooter isSubmitting={isSubmitting} />}
    />
  )
}
