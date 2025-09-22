import type { StudyGroupList } from '@/types'

import { StudyGroupCard } from '@components'

interface StudyGroupCardListProps {
  studyGroups: StudyGroupList[]
}

export default function StudyGroupCardList({
  studyGroups,
}: StudyGroupCardListProps) {
  return (
    <div className="flex justify-center gap-6">
      {studyGroups.map((group) => (
        <StudyGroupCard key={group.uuid} studyGroup={group} />
      ))}
    </div>
  )
}
