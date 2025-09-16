import { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'

import { ScheduleCalendar, Card, Button } from '@components'
import { AddScheduleModal } from './modal'

import type { StudyGroup } from '@models'

export default function StudyGroupSchedule({
  schedule,
}: Pick<StudyGroup, 'schedule'>) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <Card title="스케줄 관리" titleClassName="pt-1.5 pb-7.5 text-xl">
      <Button className="absolute right-6" onClick={openModal}>
        <PlusIcon width={16} />
        스케줄 추가
      </Button>
      <ScheduleCalendar schedule={schedule} />
      <AddScheduleModal isOpen={isModalOpen} onClose={closeModal} />
    </Card>
  )
}
