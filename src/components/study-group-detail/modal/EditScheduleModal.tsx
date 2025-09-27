import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { BaseModal, ModalBody, MODAL_PRESETS, ScheduleForm } from '@components'

import type { CreateScheduleResponse } from '@api'
import type { ScheduleFormInputs } from '@models'

interface EditScheduleModalProps {
  isOpen: boolean
  onClose: () => void
  schedule: CreateScheduleResponse
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
      objective: schedule.objective,
      sessionDate: schedule.sessionDate,
      startTime: schedule.startTime,
      endTime: schedule.endTime,
      participants: schedule.participants ?? [],
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
