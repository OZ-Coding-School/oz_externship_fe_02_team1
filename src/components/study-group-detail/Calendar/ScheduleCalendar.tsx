import { useState } from 'react'

import CalendarHeader from './CalendarHeader'
import CalendarDays from './CalendarDays'
import CalendarBody from './CalendarBody'

import type { StudyGroupScheduleList } from '@models'

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
