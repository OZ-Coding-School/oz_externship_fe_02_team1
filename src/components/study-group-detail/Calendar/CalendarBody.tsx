import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  eachDayOfInterval,
} from 'date-fns'
import { cn, formatTime } from '@utils'
import type { StudyGroupScheduleList } from '@models'
import { CalendarBodyDate, Text } from '@components'

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
          <div
            key={index}
            className={cn(
              'relative h-28 border-r border-b border-gray-200 p-2 text-left text-sm text-gray-900',
              !isSameMonth(day, currentMonth) && 'text-white',
              index === days.length - 1 && 'rounded-br-lg',
              index === days.length - 7 && 'rounded-bl-lg'
            )}
          >
            <CalendarBodyDate day={day} dateKey={dateKey} />

            {schedule && (
              <div className="bg-primary-100 border-primary-100 mt-2 aspect-square overflow-hidden rounded-sm border-4">
                <Text className="text-primary-800 text-xs font-medium text-nowrap">
                  {schedule.title}
                </Text>
                <Text className="text-primary-800 text-xs break-all">
                  {formatTime(schedule.startTime)} ~
                  {formatTime(schedule.endTime)}
                </Text>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
