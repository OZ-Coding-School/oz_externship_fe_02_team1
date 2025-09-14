import { PlusIcon } from '@heroicons/react/24/outline'

import { ScheduleCalendar, Card, Button } from '@components'

import type { StudyGroup } from '@models'

export default function StudyGroupSchedule({
  schedule,
}: Pick<StudyGroup, 'schedule'>) {
  return (
    <Card title="스케줄 관리" className="pt-1.5 pb-7.5 text-xl">
      <Button className="absolute right-6">
        <PlusIcon width={16} />
        스케줄 추가
      </Button>
      <ScheduleCalendar schedule={schedule} />
    </Card>
  )
}
