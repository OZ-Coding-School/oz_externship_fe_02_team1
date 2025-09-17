import { format, isSameDay, isSameMonth } from 'date-fns'

import { Text } from '@components'
import { useModal } from '@hooks'
import { cn, formatTime } from '@utils'

import { ScheduleDetailModal } from '../modal'

import type { StudyGroupScheduleList } from '@models'

const scheduleTextStyle = 'text-primary-800 text-xs'

interface CalendarBodyDateProps {
  day: Date
  dateKey: string
  schedule: StudyGroupScheduleList | undefined
  currentMonth: Date
  index: number
  daysLength: number
}

export default function CalendarBodyDate({
  day,
  dateKey,
  schedule,
  currentMonth,
  index,
  daysLength,
}: CalendarBodyDateProps) {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <div
      className={cn(
        'relative aspect-square overflow-hidden border-r border-b border-gray-200 p-2 text-left text-sm text-gray-900',
        !isSameMonth(day, currentMonth) && 'text-gray-400',
        index === daysLength - 1 && 'rounded-br-lg',
        index === daysLength - 7 && 'rounded-bl-lg'
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
        <>
          <button
            type="button"
            onClick={openModal}
            className="bg-primary-100 border-primary-100 mt-2 aspect-square w-full overflow-hidden rounded-sm border-4 text-left"
          >
            <Text
              className={cn('block font-medium text-nowrap', scheduleTextStyle)}
            >
              {schedule.title}
            </Text>
            <Text className={cn('break-all', scheduleTextStyle)}>
              {formatTime(schedule.startTime)}~{formatTime(schedule.endTime)}
            </Text>
          </button>

          <ScheduleDetailModal
            schedule={schedule}
            isOpen={isOpen}
            onClose={closeModal}
            confirm={() => {}}
          />
        </>
      )}
      <div className="absolute right-0 bottom-0 left-0 block h-px border-y-4 border-white" />
    </div>
  )
}
