import { useState } from 'react'

import useDateModal from '@/hooks/useDateModal'
import { MIN_MEMBERS } from '@components'
import type { PublicOption } from '@components'

export function useCreateGroupForm() {
  // 기본 정보
  const [groupName, setGroupName] = useState('')
  const [description, setDescription] = useState('')

  // 기간/인원
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [maxMembers, setMaxMembers] = useState(MIN_MEMBERS)

  // 강의 선택
  const [visibility, setVisibility] = useState<PublicOption>('private')

  // 날짜 모달
  const dateModal = useDateModal({
    startDate,
    endDate,
    setStartDate,
    setEndDate,
  })

  const hasRequired =
    groupName.trim() && startDate.trim() && endDate.trim() && maxMembers > 1

  const isSubmitDisabled = !(hasRequired && !dateModal.hasRangeError)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitDisabled) return
    alert('제출 시뮬레이션 (API 연동 지점 TODO)')
  }

  return {
    groupName,
    setGroupName,
    description,
    setDescription,
    startDate,
    endDate,
    maxMembers,
    setMaxMembers,
    visibility,
    setVisibility,
    isSubmitDisabled,
    handleSubmit,
    ...dateModal,
  }
}
