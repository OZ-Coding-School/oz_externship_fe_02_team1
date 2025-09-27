import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
} from 'date-fns'

import { CalendarBodyDate } from '@components'

import type { CreateScheduleResponse } from '@api'

interface CalendarBodyProps {
  schedule: CreateScheduleResponse[] | undefined
  currentMonth: Date
}

export default function CalendarBody({
  schedule,
  currentMonth,
}: CalendarBodyProps) {
  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)

  const days = eachDayOfInterval({ start: startDate, end: endDate })

  return (
    <div className="grid grid-cols-7 border-t border-l border-gray-200">
      {days.map((day, index) => {
        const dateKey = format(day, 'yyyy-MM-dd')

        return (
          <CalendarBodyDate
            key={day.getTime()}
            day={day}
            dateKey={dateKey}
            schedule={schedule?.find((e) => e.sessionDate === dateKey)}
            currentMonth={currentMonth}
            index={index}
            daysLength={days.length}
          />
        )
      })}
    </div>
  )
}
