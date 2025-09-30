import { PlusIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ScheduleCalendar, Card, Button, AddScheduleModal } from '@components'
import { useModal, useScheduleListQeury, useToast } from '@hooks'

export default function StudyGroupSchedule() {
  const { isOpen, openModal, closeModal } = useModal()
  const { groupId } = useParams<{ groupId: string }>()
  const { toast } = useToast()

  const { data: scheduleData, isError } = useScheduleListQeury(groupId || '')

  useEffect(() => {
    if (isError) {
      toast({
        title: '스케줄 목록을 불러오는 데 실패했습니다.',
        message: '다시 시도해주세요.',
        type: 'error',
      })
    }
  }, [isError, toast])

  return (
    <Card
      title="스케줄 관리"
      titleClassName=" pt-1.5 pb-7.5 text-lg sm:text-xl "
    >
      <Button
        className="sm: text-md absolute right-6 flex gap-1 p-2 text-sm sm:px-4 sm:py-2.5"
        onClick={openModal}
      >
        <PlusIcon width={16} />
        스케줄 추가
      </Button>
      <ScheduleCalendar schedule={scheduleData?.results} />
      <AddScheduleModal isOpen={isOpen} onClose={closeModal} />
    </Card>
  )
}
