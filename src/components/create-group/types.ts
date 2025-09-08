import type { Dispatch, SetStateAction } from 'react'

export type PublicOption = 'private' | 'public'
export type DateKind = 'start' | 'end'

export interface DateModalProps {
  isOpen: boolean
  kind: DateKind | null
  tempDate: Date | undefined
  setTempDate: Dispatch<SetStateAction<Date | undefined>>
  minEndForEndPicker?: Date
  endDate?: string
  onClose: () => void
  onConfirm: () => void
  confirmDisabled?: boolean
}
