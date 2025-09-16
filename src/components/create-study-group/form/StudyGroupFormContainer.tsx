import { useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import {
  StudyGroupForm,
  type FormMode,
  type StudyGroupFormValues,
} from '@components'
import { studyGroup } from '@mocks/studyGroupDetail'
import { formatToYMD } from '@utils'

const INITIAL_MEMBER_COUNT = 6

export default function StudyGroupFormContainer({ mode }: FormMode) {
  const methods = useForm<StudyGroupFormValues>({
    defaultValues: {
      groupName: '',
      description: '',
      imageFile: null,
      startDate: '',
      endDate: '',
      memberCount: INITIAL_MEMBER_COUNT,
      lectures: [],
      initialImageUrl: null,
    },
  })

  const { reset } = methods

  useEffect(() => {
    if (mode === 'edit') {
      reset({
        groupName: studyGroup.studyGroupName,
        description: studyGroup.description,
        startDate: formatToYMD(studyGroup.startDate),
        endDate: formatToYMD(studyGroup.lastDate),
        memberCount: studyGroup.currentMemberCount,
        lectures: studyGroup.lecture || [],
        initialImageUrl: studyGroup.backgroundImage || null,
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
