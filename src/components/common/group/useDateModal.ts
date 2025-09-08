import { useState } from 'react'
import { addDays, toYMD } from '@/components/common/group/data'
import type { DateKind } from '@/components/common/group/types'

type Args = {
  startDate: string
  endDate: string
  setStartDate: (v: string) => void
  setEndDate: (v: string) => void
}

export default function useDateModal({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: Args) {
  // 모달 관련 상태만 내부에서 관리
  const [openDateKind, setOpenDateKind] = useState<DateKind | null>(null)
  const [tempDate, setTempDate] = useState<Date | undefined>(undefined)

  const openStartPicker = () => {
    setTempDate(startDate ? new Date(startDate) : undefined)
    setOpenDateKind('start')
  }

  const openEndPicker = () => {
    setTempDate(endDate ? new Date(endDate) : undefined)
    setOpenDateKind('end')
  }

  const closeDateModal = () => setOpenDateKind(null)

  const confirmDateModal = () => {
    if (!tempDate) return
    if (openDateKind === 'start') {
      setStartDate(toYMD(tempDate))
      const minEnd = addDays(tempDate, 5)
      if (endDate && new Date(endDate) < minEnd) setEndDate('')
    } else if (openDateKind === 'end') {
      setEndDate(toYMD(tempDate))
    }
    setOpenDateKind(null)
  }

  const hasRangeError =
    !!startDate &&
    !!endDate &&
    new Date(endDate) < addDays(new Date(startDate), 5)

  const minEndForEndPicker =
    openDateKind === 'end' && startDate
      ? addDays(new Date(startDate), 6)
      : undefined

  const confirmDisabled =
    !tempDate ||
    (minEndForEndPicker && tempDate < addDays(minEndForEndPicker, -1))

  return {
    openDateKind,
    tempDate,
    setTempDate,

    openStartPicker,
    openEndPicker,
    closeDateModal,
    confirmDateModal,

    minEndForEndPicker,
    confirmDisabled,
    hasRangeError,
  }
}
