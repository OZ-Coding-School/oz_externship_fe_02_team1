import { cn, formatTime } from '@utils'
import { Text } from '@components'
import type { StudyGroupScheduleList } from '@models'

const scheduleTextStyle = 'text-primary-800 text-xs'

interface CalendarBodyScheduleProps {
  schedule: StudyGroupScheduleList | undefined
}

export default function CalendarBodySchedule({
  schedule,
}: CalendarBodyScheduleProps) {
  return (
    <>
      {schedule && (
        <div className="bg-primary-100 border-primary-100 mt-2 aspect-square overflow-hidden rounded-sm border-4">
          <Text className={cn('font-medium text-nowrap', scheduleTextStyle)}>
            {schedule.title}
          </Text>
          <Text className={cn('break-all', scheduleTextStyle)}>
            {formatTime(schedule.startTime)} ~{formatTime(schedule.endTime)}
          </Text>
        </div>
      )}
    </>
  )
}
