import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
} from 'date-fns'

import { CalendarBodyDate } from '@components'

import type { StudyGroupScheduleList } from '@models'

interface CalendarBodyProps {
  schedule: StudyGroupScheduleList[]
  currentMonth: Date
}

export default function CalendarBody({
  schedule,
  currentMonth,
}: CalendarBodyProps) {
  const schedulesByDate = new Map(
    schedule.map((e) => [format(e.date, 'yyyy-MM-dd'), e])
  )

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)

  const days = eachDayOfInterval({ start: startDate, end: endDate })

  return (
    <div className="grid grid-cols-7 border-t border-l border-gray-200">
      {days.map((day, index) => {
        const dateKey = format(day, 'yyyy-MM-dd')
        const schedule = schedulesByDate.get(dateKey)

        return (
          <CalendarBodyDate
            key={index}
            day={day}
            dateKey={dateKey}
            schedule={schedule}
            currentMonth={currentMonth}
            index={index}
            daysLength={days.length}
          />
        )
      })}
    </div>
  )
}
