import { StudyGroupCard } from '@components'

import type { StudyGroupList } from '@/types'


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
