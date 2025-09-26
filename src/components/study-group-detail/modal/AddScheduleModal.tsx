import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router'

import { BaseModal, ModalBody, MODAL_PRESETS, ScheduleForm } from '@components'
import { useScheduleMutations } from '@hooks'
import { studyGroupList } from '@mocks/datas/studygroupList'

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
  const params = useParams()
  const studyGroupUuid = params.groupId

  const formMethods = useForm<ScheduleFormInputs>({
    defaultValues: {
      title: '',
      objective: '',
      participants: [],
    },
  })

  const { handleSubmit, reset } = formMethods
  const createScheduleMutation = useScheduleMutations()

  useEffect(() => {
    if (!isOpen) {
      reset()
    }
  }, [isOpen, reset])

  const handleClose = () => {
    reset()
    onClose()
  }

  const handleConfirm = async (data: ScheduleFormInputs) => {
    const scheduleData = {
      title: data.title,
      objective: data.objective,
      session_date: data.sessionDate,
      study_group: studyGroupList.find((group) => group.uuid === studyGroupUuid)
        ?.id,
      start_time: `${data.startTime}:00`,
      end_time: `${data.endTime}:00`,
    }

    try {
      await createScheduleMutation.mutateAsync(scheduleData)
      alert('스케줄이 생성되었습니다.')
      handleClose()
    } catch (error) {
      console.error('Failed to create schedule', error)
      alert('스케줄 생성에 실패했습니다.')
    }
  }

  return (
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
  )
}
