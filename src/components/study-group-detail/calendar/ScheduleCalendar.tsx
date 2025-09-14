import { useState } from 'react'

import { CalendarBody, CalendarDays, CalendarHeader } from '@components'

import type { StudyGroupScheduleList } from '@models'

interface CalendarProps {
  schedule: StudyGroupScheduleList[] | undefined
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
