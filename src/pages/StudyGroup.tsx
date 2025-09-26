import { useState } from 'react'

import { StudyGroupMainHeader, StudyGroupSection } from '@components'
import { STUDY_GROUP_STATUS } from '@constants'
import useDebounce from '@hooks/useDebounce'
import { studyGroupList } from '@mocks/datas/studygroupList'

export default function StudyGroup() {
  const [searchQuery, setSearchQuery] = useState('')
  const debouncedSearchQuery = useDebounce(searchQuery, 300)

  const filteredGroups = studyGroupList.filter(({ name }) =>
    name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  )

  const inProgressGroups = filteredGroups.filter(
    ({ status }) => status === STUDY_GROUP_STATUS.IN_PROGRESS
  )
  const completedGroups = filteredGroups.filter(
    ({ status }) => status === STUDY_GROUP_STATUS.COMPLETED
  )

  return (
    <div className="flex flex-col gap-8">
      <StudyGroupMainHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div className="flex flex-col gap-12">
        <StudyGroupSection
          title="진행중인 스터디"
          subtitle="현재 활발히 진행되고 있는 스터디 그룹들"
          badgeVariant="진행중"
          badgeClassName="bg-green-100 text-green-800"
          groups={inProgressGroups}
        />
        <StudyGroupSection
          title="완료된 스터디"
          subtitle="성공적으로 마무리된 스터디 그룹들"
          badgeVariant="종료됨"
          badgeClassName="bg-gray-100 text-gray-800"
          groups={completedGroups}
        />
      </div>
    </div>
  )
}
