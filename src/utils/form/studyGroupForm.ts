import type { LectureItem } from '@api'
import type { StudyGroupFormValues } from '@components'

export const buildCreateStudyGroupFormData = (
  values: StudyGroupFormValues
): FormData => {
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
      JSON.stringify(
        values.lectures.map((lecture: LectureItem) => lecture.uuid)
      )
    )
  }

  return formData
}
