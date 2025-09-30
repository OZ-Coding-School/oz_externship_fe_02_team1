import { StudyGroupCard } from '@components'

import type { StudyGroupList } from '@/types'

interface StudyGroupCardListProps {
  studyGroups: StudyGroupList[]
}

export default function StudyGroupCardList({
  studyGroups,
}: StudyGroupCardListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {studyGroups.map((group) => (
        <StudyGroupCard key={group.uuid} studyGroup={group} />
      ))}
    </div>
  )
}
