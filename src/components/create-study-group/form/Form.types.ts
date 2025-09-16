import type { StudyGroupLectureList } from '@models'

export interface FormMode {
  mode: 'create' | 'edit'
}

export interface StudyGroupFormValues {
  groupName: string
  description?: string
  imageFile: File | null
  startDate: string
  endDate: string
  memberCount: number
  lectures: StudyGroupLectureList[]
  initialImageUrl?: string | null
}
