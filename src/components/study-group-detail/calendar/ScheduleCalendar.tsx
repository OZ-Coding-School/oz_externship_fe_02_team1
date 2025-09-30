import { useState } from 'react'

import { CalendarBody, CalendarDays, CalendarHeader } from '@components'

import type { CreateScheduleResponse } from '@api'

interface CalendarProps {
  schedule: CreateScheduleResponse[] | undefined
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
