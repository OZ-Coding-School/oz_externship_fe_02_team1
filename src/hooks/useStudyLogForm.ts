import { useEffect } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import {
  useLogFileUpload,
  usePageNav,
  useStudyLogMutations,
  useLogDetailQuery,
  useToast,
} from '@hooks'
import { prepareLogSubmitPayload, transformApiResponseToLogFiles } from '@utils'

interface UseStudyLogFormProps {
  mode: 'create' | 'edit'
}

interface FormInputs {
  title: string
  content: string
}

export const useStudyLogForm = ({ mode }: UseStudyLogFormProps) => {
  const { toast } = useToast()

  // form
  const { register, handleSubmit, setValue, control } = useForm<FormInputs>({
    defaultValues: { title: '', content: '' },
  })

  // navigation
  const { handleGoBack, navigateToLogDetail } = usePageNav()

  // params
  const { groupId, recordId } = useParams()
  const groupUuid = groupId
  const noteId = Number(recordId)

  const isEditMode = mode === 'edit'

  if (!groupUuid) {
    throw new Error('스터디 그룹 ID가 URL에 존재하지 않습니다.')
  }

  // file upload
  const { uploadedFiles, setUploadedFiles, ...fileUploadHandlers } =
    useLogFileUpload({ groupUuid })

  // query
  const { data: studyLogData, isLoading: isFetching } = useLogDetailQuery(
    groupUuid,
    noteId,
    { enabled: isEditMode && !!noteId }
  )

  // mutations
  const { createLog, isCreating, updateLog, isUpdating } = useStudyLogMutations(
    {
      groupUuid,
      noteId,
      onSuccess: (data) => {
        const newNoteId = data.id || noteId
        navigateToLogDetail(groupUuid, newNoteId)
      },
    }
  )

  // -------------------- Effect --------------------
  useEffect(() => {
    if (isEditMode && studyLogData) {
      setValue('title', studyLogData.title)
      setValue('content', studyLogData.content)

      const initialFiles = transformApiResponseToLogFiles(studyLogData)
      setUploadedFiles(initialFiles)
    }
  }, [studyLogData, isEditMode, setValue, setUploadedFiles])

  // -------------------- Handlers --------------------
  const onSubmit: SubmitHandler<FormInputs> = async (formData) => {
    try {
      const payload = await prepareLogSubmitPayload(
        uploadedFiles,
        groupUuid,
        formData.title,
        formData.content
      )

      if (isEditMode) updateLog(payload)
      else createLog(payload)
    } catch {
      toast({
        title: '스터디 기록을 생성하지 못했습니다.',
        message: '다시 시도해주세요.',
        type: 'error',
      })
    }
  }

  // -------------------- Return --------------------
  return {
    form: { register, control },
    state: { uploadedFiles, groupUuid, noteId, isEditMode },
    fileHandlers: fileUploadHandlers,
    handlers: {
      handleSubmit: handleSubmit(onSubmit),
      handleGoBack,
      navigateToLogDetail,
    },
    isLoading: isFetching || isCreating || isUpdating,
  }
}
