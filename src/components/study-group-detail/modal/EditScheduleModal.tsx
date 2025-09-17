import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { BaseModal, ModalBody, MODAL_PRESETS, ScheduleForm } from '@components'
import type { StudyGroupScheduleList, ScheduleFormInputs } from '@models'
import { formatTimeToHHMM } from '@utils'

interface EditScheduleModalProps {
  isOpen: boolean
  onClose: () => void
  schedule: StudyGroupScheduleList
}

export default function EditScheduleModal({
  isOpen,
  onClose,
  schedule,
}: EditScheduleModalProps) {
  const [tempDate, setTempDate] = useState<Date | undefined>(undefined)

  const formMethods = useForm<ScheduleFormInputs>({
    defaultValues: {
      title: schedule.title,
      goal: schedule.goal,
      date: new Date(schedule.date),
      startTime: formatTimeToHHMM(schedule.startTime) ?? '',
      endTime: formatTimeToHHMM(schedule.endTime) ?? '',
      participants: schedule.participants.map((p) => p.name),
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
    <>
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
    </>
  )
}
