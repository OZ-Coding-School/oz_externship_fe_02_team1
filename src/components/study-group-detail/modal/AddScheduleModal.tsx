import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { BaseModal, ModalBody, MODAL_PRESETS, ScheduleForm } from '@components'
import type { ScheduleFormInputs } from '@models'

interface AddScheduleModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AddScheduleModal({
  isOpen,
  onClose,
}: AddScheduleModalProps) {
  const [tempDate, setTempDate] = useState<Date | undefined>(undefined)

  const formMethods = useForm<ScheduleFormInputs>({
    defaultValues: {
      title: '',
      objective: '',
      participants: [],
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
    console.log(data)
    handleClose()
  }

  return (
    <>
      <BaseModal isOpen={isOpen} onClose={handleClose} size="md">
        {MODAL_PRESETS.scheduleAdd.header({
          onClose: handleClose,
          title: '새 스케줄 추가',
        })}

        <ModalBody>
          <ScheduleForm
            formMethods={formMethods}
            tempDate={tempDate}
            setTempDate={setTempDate}
          />
        </ModalBody>

        {MODAL_PRESETS.scheduleAdd.footer({
          onClose: handleClose,
          onConfirm: handleSubmit(handleConfirm),
        })}
      </BaseModal>
    </>
  )
}
