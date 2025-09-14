import type { Matcher } from 'react-day-picker'

import {
  VARIANT_STYLE,
  WRAPPER_WIDTH,
  type CalendarVariant,
  type CalendarWidth,
} from '@components'
import { cn } from '@utils'

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
