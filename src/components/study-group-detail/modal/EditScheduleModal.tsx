import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { BaseModal, ModalBody, MODAL_PRESETS, ScheduleForm } from '@components'
import { studyGroupList } from '@mocks/datas/studygroupList'

import type { ScheduleDetailResponse } from '@api'
import type { ScheduleFormInputs } from '@models'

interface EditScheduleModalProps {
  isOpen: boolean
  onClose: () => void
  schedule: ScheduleDetailResponse
}

export default function EditScheduleModal({
  isOpen,
  onClose,
  schedule,
}: EditScheduleModalProps) {
  const [tempDate, setTempDate] = useState<Date | undefined>(undefined)
  const { groupId } = useParams<{ groupId: string }>()

  const currentStudyGroup = studyGroupList.find(
    (group) => group.uuid === groupId
  )

  if (!currentStudyGroup) {
    return null
  }

  const mockParticipants = [
    currentStudyGroup?.members?.[0],
    currentStudyGroup?.members?.[1],
    currentStudyGroup?.members?.[3],
    currentStudyGroup?.members?.[4],
  ].filter(Boolean) as typeof currentStudyGroup.members

  const formMethods = useForm<ScheduleFormInputs>({
    defaultValues: {
      title: schedule.title,
      objective: schedule.objective,
      sessionDate: schedule.sessionDate,
      startTime: schedule.startTime,
      endTime: schedule.endTime,
      participants: mockParticipants?.map((p) => ({
        userId: p.uuid,
        nickname: p.nickname,
        isLeader: p.isLeader,
      })),
    },
  })

  const { handleSubmit, reset } = formMethods

  useEffect(() => {
    if (!isOpen) {
      reset()
    }
  }, [isOpen, reset])

  const handleClose = () => {
    reset()
    onClose()
  }

  const handleConfirm = (data: ScheduleFormInputs) => {
    console.log('Edited Schedule:', data)
    handleClose()
  }

  return (
    <BaseModal isOpen={isOpen} onClose={handleClose} size="md">
      {MODAL_PRESETS.scheduleEdit.header({
        onClose: handleClose,
        title: '스케줄 수정',
      })}

      <ModalBody>
        <ScheduleForm
          formMethods={formMethods}
          tempDate={tempDate}
          setTempDate={setTempDate}
        />
      </ModalBody>

      {MODAL_PRESETS.scheduleEdit.footer({
        onClose: handleClose,
        onConfirm: handleSubmit(handleConfirm),
      })}
    </BaseModal>
  )
}
