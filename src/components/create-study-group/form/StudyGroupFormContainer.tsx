import { useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import {
  StudyGroupForm,
  type FormMode,
  type StudyGroupFormValues,
} from '@components'
import { studyGroup } from '@mocks/datas/studyGroupDetail'

const INITIAL_MEMBER_COUNT = 6

export default function StudyGroupFormContainer({ mode }: FormMode) {
  const methods = useForm<StudyGroupFormValues>({
    defaultValues: {
      name: '',
      introduction: '',
      imageFile: null,
      startAt: '',
      endAt: '',
      currentHeadcount: INITIAL_MEMBER_COUNT,
      lectures: [],
      imgUrl: null,
    },
  })

  const { reset } = methods

  useEffect(() => {
    if (mode === 'edit') {
      reset({
        name: studyGroup.name,
        introduction: studyGroup.introduction,
        startAt: studyGroup.startAt,
        endAt: studyGroup.endAt,
        currentHeadcount: studyGroup.currentHeadcount,
        lectures: studyGroup.lectures || [],
        imgUrl: studyGroup.imgUrl || null,
        imageFile: null,
      })
    }
  }, [mode, reset])

  const handleSubmit = (values: StudyGroupFormValues) => {
    if (mode === 'create') {
      alert(`Creating study group: ${JSON.stringify(values, null, 2)}`)
    } else {
      alert(`Updating study group: ${JSON.stringify(values, null, 2)}`)
    }
  }

  return (
    <FormProvider {...methods}>
      <StudyGroupForm mode={mode} onSubmit={handleSubmit} />
    </FormProvider>
  )
}
