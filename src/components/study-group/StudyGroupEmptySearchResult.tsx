import { BaseEmptyState, EmptyState } from '@components'

import { CompletedIcon, InProgressIcon } from '@assets'
import { usePageNav } from '@hooks'
import type { StudyGroupStatus } from '@models'

interface StudyGroupEmptySearchResultProps {
  variant: StudyGroupStatus
}

export default function StudyGroupEmptySearchResult({
  variant,
}: StudyGroupEmptySearchResultProps) {
  const { navigateToCreateNewStudy } = usePageNav()

  if (variant === '진행중') {
    return (
      <EmptyState
        title="검색된 진행중인 스터디가 없습니다"
        description="새로운 스터디 그룹을 만들어보세요!"
        icon={<InProgressIcon />}
        onCreate={navigateToCreateNewStudy}
      />
    )
  }

  return (
    <BaseEmptyState
      title="검색된 완료된 스터디가 없습니다"
      description="아직 완료된 스터디 그룹이 없습니다"
      icon={<CompletedIcon />}
    />
  )
}
