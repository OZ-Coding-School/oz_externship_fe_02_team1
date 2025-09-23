import { SectionHeader, StudyBadge, StudyGroupCardList , StudyGroupEmptySearchResult } from '@components'

import type { StudyGroupList } from '@/types'

interface StudyGroupSectionProps {
  title: string
  subtitle: string
  badgeVariant: 'inProgress' | 'ended'
  badgeClassName: string
  groups: StudyGroupList[]
}

export default function StudyGroupSection({
  title,
  subtitle,
  badgeVariant,
  badgeClassName,
  groups,
}: StudyGroupSectionProps) {
  return (
    <section className="flex flex-col gap-6">
      <SectionHeader title={title} subtitle={subtitle} titleVariant="2xl">
        <StudyBadge variant={badgeVariant} className={badgeClassName}>
          {groups.length}개
        </StudyBadge>
      </SectionHeader>
      {groups.length > 0 ? (
        <StudyGroupCardList studyGroups={groups} />
      ) : (
        <StudyGroupEmptySearchResult variant={badgeVariant} />
      )}
    </section>
  )
}
