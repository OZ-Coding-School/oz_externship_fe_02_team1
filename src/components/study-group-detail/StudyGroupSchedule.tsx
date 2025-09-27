import { PlusIcon } from '@heroicons/react/24/outline'
import { useParams } from 'react-router-dom'

import { ScheduleCalendar, Card, Button, AddScheduleModal } from '@components'
import { useModal, useScheduleListQeury } from '@hooks'

export default function StudyGroupSchedule() {
  const { isOpen, openModal, closeModal } = useModal()
  const { groupId } = useParams<{ groupId: string }>()

  const { data: scheduleData } = useScheduleListQeury(groupId || '')

  console.log(scheduleData)

  return (
    <Card title="스케줄 관리" titleClassName="pt-1.5 pb-7.5 text-xl">
      <Button className="absolute right-6" onClick={openModal}>
        <PlusIcon width={16} />
        스케줄 추가
      </Button>
      <ScheduleCalendar schedule={scheduleData?.results} />
      <AddScheduleModal isOpen={isOpen} onClose={closeModal} />
    </Card>
  )
}
