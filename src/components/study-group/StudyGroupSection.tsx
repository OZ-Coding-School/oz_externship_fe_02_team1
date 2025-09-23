import type { StudyGroupList } from '@/types'
import { SectionHeader, StudyBadge, StudyGroupCardList } from '@components'
import { StudyGroupEmptySearchResult } from '@components'

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
