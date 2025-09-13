import { useState } from 'react'
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isSameDay,
  eachDayOfInterval,
} from 'date-fns'
import { cn, formatTime } from '@utils'
import type { StudyGroupScheduleList } from '@models'
import { Text, CalendarHeader } from '@components'

interface CalendarProps {
  schedule: StudyGroupScheduleList[]
}

export default function ScheduleCalendar({ schedule }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const schedulesByDate = new Map(
    schedule.map((e) => [format(e.date, 'yyyy-MM-dd'), e])
  )

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)

  const days = eachDayOfInterval({ start: startDate, end: endDate })
  const dayNames = ['일', '월', '화', '수', '목', '금', '토']

  return (
    <>
      <CalendarHeader
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
      />

      <div className="grid grid-cols-7 rounded-t-lg border-t border-l border-gray-200 text-center text-sm text-gray-500">
        {dayNames.map((day, index) => (
          <div
            key={day}
            className={cn(
              'border-r border-gray-200 bg-gray-50 py-2 text-sm text-gray-700',
              index === dayNames.length - 1 && 'rounded-tr-lg'
            )}
          >
            {day}
          </div>
        ))}
      </div>
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
              <time
                dateTime={dateKey}
                className={cn(
                  isSameDay(day, new Date()) &&
                    'bg-primary-500 flex h-6 w-6 items-center justify-center rounded-full font-semibold text-white'
                )}
              >
                {format(day, 'd')}
              </time>
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
    </>
  )
}
