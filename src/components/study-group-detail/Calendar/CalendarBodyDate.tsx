import { cn } from '@utils'
import { format, isSameDay } from 'date-fns'

interface CalendarBodyDateProps {
  day: Date
  dateKey: string
}

export default function CalendarBodyDate({
  day,
  dateKey,
}: CalendarBodyDateProps) {
  return (
    <time
      dateTime={dateKey}
      className={cn(
        isSameDay(day, new Date()) &&
          'bg-primary-500 flex h-6 w-6 items-center justify-center rounded-full font-semibold text-white'
      )}
    >
      {format(day, 'd')}
    </time>
  )
}
