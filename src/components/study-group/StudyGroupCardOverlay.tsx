import { useLocation } from 'react-router'

import { StudyBadge } from '@components'

import type { StudyGroupStatus } from '@models'

interface StudyCardOverlayProps {
  status: StudyGroupStatus
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

  if (!showBadges) {
    return null
  }

  return (
    <div className="absolute top-0 z-10 flex h-full w-full flex-col justify-between p-3">
      <div className="flex justify-between">
        {status && <StudyBadge variant={status} size="small" />}
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
