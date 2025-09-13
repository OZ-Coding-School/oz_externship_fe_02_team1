import { useState } from 'react'
import type { StudyGroupScheduleList } from '@models'
import { CalendarHeader, CalendarDays, CalendarBody } from '@components'

interface CalendarProps {
  schedule: StudyGroupScheduleList[]
}

export default function ScheduleCalendar({ schedule }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  return (
    <>
      <CalendarHeader
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
      />
      <CalendarDays />
      <CalendarBody schedule={schedule} currentMonth={currentMonth} />
    </>
  )
}
