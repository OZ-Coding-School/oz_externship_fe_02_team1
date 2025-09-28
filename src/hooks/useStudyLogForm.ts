import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useForm, type SubmitHandler } from 'react-hook-form'

import { usePageNav, useStudyLogMutations, useStudyLogQuery } from '@hooks'
import { prepareLogSubmitPayload, type LogUploadedFile } from '@utils'

interface UseStudyLogFormProps {
  mode: 'create' | 'edit'
}

interface FormInputs {
  title: string
  content: string
}

export const useStudyLogForm = ({ mode }: UseStudyLogFormProps) => {
  const [uploadedFiles, setUploadedFiles] = useState<LogUploadedFile[]>([])

  const { register, handleSubmit, setValue, control } = useForm<FormInputs>({
    defaultValues: { title: '', content: '' },
  })

  const { groupId, recordId } = useParams<{
    groupId?: string
    recordId?: string
  }>()
  const noteId = Number(recordId)
  const isEditMode = mode === 'edit'

  if (!groupId) {
    throw new Error('스터디 그룹 ID가 URL에 존재하지 않습니다.')
  }

  const { handleGoBack, navigateToLogDetail } = usePageNav()

  // Data Fetching and Mutation
  const { data: studyLogData, isLoading: isFetching } = useStudyLogQuery(
    groupId,
    noteId,
    { enabled: isEditMode && !!noteId }
  )

  const { createLog, isCreating, updateLog, isUpdating } = useStudyLogMutations(
    {
      groupId,
      noteId,
      onSuccess: (data) => {
        const newNoteId = data.id || noteId
        navigateToLogDetail(groupId, newNoteId)
      },
    }
  )

  useEffect(() => {
    if (isEditMode && studyLogData) {
      setValue('title', studyLogData.title)
      setValue('content', studyLogData.content)

      const images: LogUploadedFile[] = (studyLogData.images ?? []).map(
        (img) => ({
          id: String(img.id),
          file: new File([], img.imgUrl.split('/').pop() ?? 'image.png'),
          url: img.imgUrl,
        })
      )
      const attachments: LogUploadedFile[] = (
        studyLogData.attachments ?? []
      ).map((att) => ({
        id: String(att.id),
        file: new File([], att.fileName),
        url: att.fileUrl,
      }))

      setUploadedFiles([...images, ...attachments])
    }
  }, [studyLogData, isEditMode, setValue])

  const handleFilesAdded = (newFiles: LogUploadedFile[]) => {
    setUploadedFiles((current) => [...current, ...newFiles])
  }

  const handleFileDeleted = (fileId: string) => {
    setUploadedFiles((current) => current.filter((f) => f.id !== fileId))
  }

  const onSubmit: SubmitHandler<FormInputs> = async (formData) => {
    try {
      const payload = await prepareLogSubmitPayload(
        uploadedFiles,
        groupId,
        formData.title,
        formData.content
      )

      if (isEditMode) updateLog(payload)
      else createLog(payload)
    } catch (error) {
      console.error('스터디 기록 제출 실패:', error)
      // TODO: 사용자에게 에러 알림 (e.g., toast message)
    }
  }

  return {
    form: { register, control },
    state: { uploadedFiles, groupId, noteId, isEditMode },
    handlers: {
      handleFilesAdded,
      handleFileDeleted,
      handleSubmit: handleSubmit(onSubmit),
      handleGoBack,
      navigateToLogDetail,
    },
    isLoading: isFetching || isCreating || isUpdating,
  }
}
