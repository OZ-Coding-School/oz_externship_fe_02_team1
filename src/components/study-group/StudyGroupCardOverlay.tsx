import { useLocation } from 'react-router'

import { StudyBadge } from '@components'

import { STATUS_TO_VARIANT } from '@/constants'

interface StudyCardOverlayProps {
  status: string
  isLeader: boolean
  maxHeadcount: number
  currentHeadcount: number
}

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
    ? STATUS_TO_VARIANT[status as keyof typeof STATUS_TO_VARIANT]
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
