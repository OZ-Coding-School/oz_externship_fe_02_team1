import type {
  CalendarVariant,
  CalendarWidth,
} from '@/components/common/date-picker/calendar.types'

export const DEFAULT_FROM_YEAR = 2000
export const DEFAULT_TO_YEAR = 2050

export const WRAPPER_WIDTH: Record<CalendarWidth, string> = {
  fluid: 'mx-auto w-full',
  fixed: 'w-[320px] mx-auto',
}

export const VARIANT_STYLE: Record<CalendarVariant, string> = {
  card: 'rounded-2xl border border-gray-200 bg-white p-3 shadow-xl',
  bare: 'p-0 bg-transparent rounded-none border-0 shadow-none',
}
