import { useState } from 'react'
import { MIN_RANGE_DAYS } from '@constants'
import { formatToYMD, addDays } from '@utils'

interface UseDateModalArgs {
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
}: UseDateModalArgs) {
  // 모달 관련 상태만 내부에서 관리
  const [openDateKind, setOpenDateKind] = useState<'start' | 'end' | null>(null)
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
      setStartDate(formatToYMD(tempDate))
      const minEnd = addDays(tempDate, MIN_RANGE_DAYS)
      if (endDate && new Date(endDate) < minEnd) setEndDate('')
    } else if (openDateKind === 'end') {
      setEndDate(formatToYMD(tempDate))
    }
    setOpenDateKind(null)
  }

  const hasRangeError =
    !!startDate &&
    !!endDate &&
    new Date(endDate) < addDays(new Date(startDate), MIN_RANGE_DAYS)

  const minEndForEndPicker =
    openDateKind === 'end' && startDate
      ? addDays(new Date(startDate), MIN_RANGE_DAYS + 1)
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
