import { SectionHeader, StudyBadge, StudyGroupMainHeader } from '@components'

import { StudyGroupCard } from '@components'

export default function StudyGroup() {
  return (
    <div className="flex flex-col gap-8">
      <StudyGroupMainHeader />
      <section className="flex flex-col gap-6">
        <SectionHeader
          title="진행중인 스터디"
          subtitle="현재 활발히 진행되고 있는 스터디 그룹들"
          titleVariant="2xl"
        >
          <StudyBadge
            variant={'inProgress'}
            className="bg-green-100 text-green-800"
          />
        </SectionHeader>
        <StudyGroupCard />
      </section>
    </div>
  )
}
