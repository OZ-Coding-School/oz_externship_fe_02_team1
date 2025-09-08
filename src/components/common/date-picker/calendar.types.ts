import type { Matcher } from 'react-day-picker'

export type CalendarVariant = 'card' | 'bare'
export type CalendarWidth = 'fixed' | 'fluid'

export interface CalendarProps {
  selected?: Date
  onSelect: (date: Date) => void
  fromYear?: number
  toYear?: number
  disabled?: Matcher | Matcher[]
  className?: string
  disabledBefore?: Date
  disabledAfter?: Date
  variant?: CalendarVariant
  width?: CalendarWidth
}
