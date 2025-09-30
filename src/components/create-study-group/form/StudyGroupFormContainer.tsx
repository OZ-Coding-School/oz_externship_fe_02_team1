import { useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import {
  StudyGroupForm,
  type FormMode,
  type StudyGroupFormValues,
} from '@components'
import { useStudyGroupMutations, useToast } from '@hooks'
import { buildCreateStudyGroupFormData } from '@utils'

import type { Lecture } from '@models'
import { useParams } from 'react-router'
import { studyGroupList } from '@/mocks/datas/studygroupList'

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

  const studyGroupUuid = useParams<{ groupId: string }>().groupId
  const studyGroup =
    studyGroupList.find((group) => group.uuid === studyGroupUuid) ||
    studyGroupList[0]

  useEffect(() => {
    if (mode === 'edit') {
      reset({
        name: studyGroup.name,
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
