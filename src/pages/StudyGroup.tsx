import {
  SectionHeader,
  StudyBadge,
  StudyGroupCardList,
  StudyGroupMainHeader,
} from '@components'

import { studyGroupList } from '@/mocks/studyGroupDetail'

export default function StudyGroup() {
  const inProgressGroups = studyGroupList.filter(
    (group) => group.status === '진행중'
  )
  const completedGroups = studyGroupList.filter(
    (group) => group.status === '종료됨'
  )

  return (
    <div className="flex flex-col gap-8">
      <StudyGroupMainHeader />
      <div className="flex flex-col gap-12">
        <section className="flex flex-col gap-6">
          <SectionHeader
            title="진행중인 스터디"
            subtitle="현재 활발히 진행되고 있는 스터디 그룹들"
            titleVariant="2xl"
          >
            <StudyBadge
              variant={'inProgress'}
              className="bg-green-100 text-green-800"
            >
              {inProgressGroups.length}개
            </StudyBadge>
          </SectionHeader>
          <StudyGroupCardList studyGroups={inProgressGroups} />
        </section>

        <section className="flex flex-col gap-6">
          <SectionHeader
            title="완료된 스터디"
            subtitle="성공적으로 마무리된 스터디 그룹들"
            titleVariant="2xl"
          >
            <StudyBadge variant={'ended'} className="bg-gray-100 text-gray-800">
              {completedGroups.length}개
            </StudyBadge>
          </SectionHeader>
          <StudyGroupCardList studyGroups={completedGroups} />
        </section>
      </div>
    </div>
  )
}
