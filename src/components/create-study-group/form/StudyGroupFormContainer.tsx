import { useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import {
  StudyGroupForm,
  type FormMode,
  type StudyGroupFormValues,
} from '@components'
import { useStudyGroupMutations } from '@hooks'
import { studyGroup } from '@mocks/datas/studyGroupDetail'

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
  const { mutate: createStudyGroupMutation } = useStudyGroupMutations()

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

  const handleSubmit = (values: StudyGroupFormValues) => {
    if (mode === 'create') {
      const formData = new FormData()

      formData.append('name', values.name)
      formData.append('max_headcount', values.currentHeadcount.toString())
      formData.append('start_at', values.startAt)
      formData.append('end_at', values.endAt)

      if (values.introduction) {
        formData.append('introduction', values.introduction)
      }
      if (values.profileImgUrl) {
        formData.append('profile_img_url', values.profileImgUrl)
      }
      if (values.profileImg) {
        formData.append('profile_img', values.profileImg)
      }
      if (values.lectures && values.lectures.length > 0) {
        formData.append(
          'lectures',
          JSON.stringify(values.lectures.map((lecture) => lecture.id))
        )
      }

      createStudyGroupMutation(formData)
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
