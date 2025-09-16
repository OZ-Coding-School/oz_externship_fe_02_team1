import { PlusIcon } from '@heroicons/react/24/outline'

import { ScheduleCalendar, Card, Button, AddScheduleModal } from '@components'

import type { StudyGroup } from '@models'
import { useModal } from '@hooks'

export default function StudyGroupSchedule({
  schedule,
}: Pick<StudyGroup, 'schedule'>) {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <Card title="스케줄 관리" titleClassName="pt-1.5 pb-7.5 text-xl">
      <Button className="absolute right-6" onClick={openModal}>
        <PlusIcon width={16} />
        스케줄 추가
      </Button>
      <ScheduleCalendar schedule={schedule} />
      <AddScheduleModal isOpen={isOpen} onClose={closeModal} />
    </Card>
  )
}
