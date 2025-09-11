import {
  UserGroupIcon,
  CalendarIcon,
  ArrowLeftStartOnRectangleIcon,
  PencilIcon,
} from '@heroicons/react/24/outline'

import { Images } from '@assets'
import { Button, StudyBadge, Text } from '@components'
import { formatDate } from '@utils'

import type { StudyGroup } from '@types'

interface StudyGroupHeaderProps extends StudyGroup {
  currentUserRole?: 'member' | 'leader' | 'guest'
  isMember?: boolean
}

export default function StudyGroupHeader({
  backgroundImage,
  studyGroupName,
  currentMemberCount,
  maxMemberCount,
  startDate,
  lastDate,
  currentUserRole,
  isMember,
}: StudyGroupHeaderProps) {
  const formattedStartDate = formatDate(startDate)
  const formattedLastDate = formatDate(lastDate)

  return (
    <header className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-500">
      <img
        className="w-full"
        src={backgroundImage ?? Images.studyGroupDefault}
        alt={`${studyGroupName} 스터디 그룹 이미지`}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute bottom-6 left-6 flex flex-col gap-2 text-white">
        <Text className="text-3xl font-bold">{studyGroupName}</Text>
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <UserGroupIcon width={16} />
            <Text>
              {currentMemberCount}/{maxMemberCount}명
            </Text>
          </div>
          <div className="flex items-center gap-1">
            <CalendarIcon width={16} />
            <Text>
              {formattedStartDate} ~ {formattedLastDate}
            </Text>
          </div>
          <StudyBadge variant="inProgress" />
        </div>
      </div>

      <div className="absolute top-6 right-6 flex gap-3">
        {currentUserRole === 'leader' && (
          <Button variant="ghost" className="bg-white py-2">
            <PencilIcon width={16} />
            수정하기
          </Button>
        )}
        {isMember && (
          <Button variant="danger" className="py-2">
            <ArrowLeftStartOnRectangleIcon width={16} />
            나가기
          </Button>
        )}
      </div>
    </header>
  )
}
