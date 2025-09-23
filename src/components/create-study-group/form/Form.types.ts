import type { Lecture } from '@models'

export interface FormMode {
  mode: 'create' | 'edit'
}

export interface StudyGroupFormValues {
  name: string
  introduction?: string
  profileImgUrl?: string | null
  profileImg?: File | null
  startAt: string
  endAt: string
  maxHeadcount: number
  currentHeadcount: number
  lectures: Lecture[]
}
