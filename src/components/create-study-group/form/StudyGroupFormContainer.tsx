import { useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import {
  StudyGroupForm,
  type FormMode,
  type StudyGroupFormValues,
} from '@components'
import { useStudyGroupMutations, useToast } from '@hooks'
import { studyGroup } from '@mocks/datas/studyGroupDetail'
import { buildCreateStudyGroupFormData } from '@utils'

import type { Lecture } from '@models'

const INITIAL_MEMBER_COUNT = 6

export default function StudyGroupFormContainer({ mode }: FormMode) {
  const methods = useForm<StudyGroupFormValues>({
    defaultValues: {
      name: '',
      introduction: '',
      maxHeadcount: INITIAL_MEMBER_COUNT,
      currentHeadcount: INITIAL_MEMBER_COUNT,
      profileImgUrl: '',
      profileImg: null,
      startAt: '',
      endAt: '',
      lectures: [] as Lecture[],
    },
  })

  const { reset } = methods
  const createStudyGroupMutation = useStudyGroupMutations()
  const { toast } = useToast()

  useEffect(() => {
    if (mode === 'edit') {
      reset({
        name: studyGroup.name,
        introduction: studyGroup.introduction || '',
        startAt: studyGroup.startAt,
        endAt: studyGroup.endAt,
        currentHeadcount: studyGroup.currentHeadcount,
        lectures: studyGroup.lectures || [],
        profileImgUrl: studyGroup.imgUrl || null,
        profileImg: null,
      })
    }
  }, [mode, reset])

  const handleSubmit = async (values: StudyGroupFormValues) => {
    const formData = buildCreateStudyGroupFormData(values)

    try {
      await createStudyGroupMutation.mutateAsync(formData)
      toast({
        title: '스터디 그룹이 생성되었습니다.',
        message: '',
        type: 'success',
      })
    } catch {
      toast({
        title: '스터디 그룹을 생성하지 못했습니다.',
        message: '다시 시도해주세요.',
        type: 'error',
      })
    }
  }

  return (
    <FormProvider {...methods}>
      <StudyGroupForm mode={mode} onSubmit={handleSubmit} />
    </FormProvider>
  )
}
