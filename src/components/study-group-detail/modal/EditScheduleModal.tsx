import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { BaseModal, ModalBody, MODAL_PRESETS, ScheduleForm } from '@components'
import { useScheduleMutations, useToast } from '@hooks'
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
  const { toast } = useToast()

  const currentStudyGroup =
    studyGroupList.find((group) => group.uuid === groupId) || studyGroupList[0]

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
  const { updateScheduleMutation } = useScheduleMutations(groupId || '')

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
      start_time: `${data.startTime}:00`,
      end_time: `${data.endTime}:00`,
    }

    try {
      await updateScheduleMutation.mutateAsync({
        scheduleId: schedule.id,
        data: scheduleData,
      })
      toast({
        title: '스케줄이 성공적으로 수정되었습니다.',
        message: '',
        type: 'success',
      })
      handleClose()
    } catch {
      toast({
        title: '스케줄 수정에 실패했습니다.',
        message: '다시 시도해주세요.',
        type: 'error',
      })
    }
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
