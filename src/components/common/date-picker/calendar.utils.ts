import type { Matcher } from 'react-day-picker'
import { cn } from '@/utils'
import { VARIANT_STYLE, WRAPPER_WIDTH } from './calendar.constants'
import type { CalendarVariant, CalendarWidth } from './calendar.types'

export const buildDisabled = (
  disabledBefore?: Date,
  disabledAfter?: Date,
  disabled?: Matcher | Matcher[]
): Matcher | Matcher[] | undefined => {
  const convenience: Matcher[] = [
    disabledBefore ? { before: disabledBefore } : undefined,
    disabledAfter ? { after: disabledAfter } : undefined,
  ].filter(Boolean) as Matcher[]

  return disabled ?? (convenience.length ? convenience : undefined)
}

export const buildWrapperClass = (
  width: CalendarWidth,
  variant: CalendarVariant,
  extra?: string
) =>
  cn(
    WRAPPER_WIDTH[width],
    VARIANT_STYLE[variant],
    'select-none text-gray-900',
    extra
  )
