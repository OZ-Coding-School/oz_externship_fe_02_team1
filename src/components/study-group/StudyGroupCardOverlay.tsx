import { useLocation } from 'react-router'

import { StudyBadge } from '@components'

interface StudyCardOverlayProps {
  status: string
  isLeader: boolean
  maxHeadcount: number
  currentHeadcount: number
}

// status 문자열을 variant 값으로 변환하기 위한 객체
const statusToVariant = {
  진행중: 'inProgress',
  종료됨: 'ended',
  대기중: 'primary',
} as const

export default function StudyGroupCardOverlay({
  status,
  isLeader,
  maxHeadcount,
  currentHeadcount,
}: StudyCardOverlayProps) {
  const location = useLocation()
  const showBadges = location.pathname === '/study-group'

  // status 문자열에 해당하는 variant 값을 찾음
  const statusVariant = status
    ? statusToVariant[status as keyof typeof statusToVariant]
    : undefined

  if (!showBadges) {
    return null
  }

  return (
    <div className="absolute top-0 z-10 flex h-full w-full flex-col justify-between p-3">
      <div className="flex justify-between">
        {statusVariant && <StudyBadge variant={statusVariant} size="small" />}
        {isLeader && <StudyBadge variant="leader" size="small" />}
      </div>
      <StudyBadge
        size="large"
        variant="primary"
        member={currentHeadcount}
        maxMember={maxHeadcount}
        className="self-start"
      />
    </div>
  )
}
