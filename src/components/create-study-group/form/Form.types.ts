import type { Lecture } from '@models'

export interface FormMode {
  mode: 'create' | 'edit'
}

export interface StudyGroupFormValues {
  name: string
  introduction?: string
  imageFile: File | null
  startAt: string
  endAt: string
  currentHeadcount: number
  lectures: Lecture[]
  imgUrl?: string | null
}
