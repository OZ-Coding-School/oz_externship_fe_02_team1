import { Button, StudyBadge, Text } from '@components'
import {
  UserGroupIcon,
  CalendarIcon,
  ArrowLeftStartOnRectangleIcon,
  PencilIcon,
} from '@heroicons/react/24/outline'
import { formatDate } from '@utils'

interface StudyGroupHeaderProps {
  backgroundImage?: string
  studyGroupName?: string
  memberCount?: number
  startDate?: Date
  lastDate?: Date
  currentUserRole?: 'member' | 'leader' | 'guest'
  isMember?: boolean
}

export default function StudyGroupHeader({
  backgroundImage,
  studyGroupName,
  memberCount,
  startDate,
  lastDate,
  currentUserRole,
  isMember,
}: StudyGroupHeaderProps) {
  const formatedStartDate = formatDate(startDate ?? new Date('2024-01-01'))
  const formatedLastDate = formatDate(lastDate ?? new Date('2024-04-30'))

  return (
    <header className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-500">
      <img
        className="w-full"
        src={backgroundImage ?? '/src/assets/images/study-group-default.png'}
        alt={studyGroupName}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute bottom-6 left-6 flex flex-col gap-2 text-white">
        <Text className="text-3xl font-bold">
          {studyGroupName ?? 'React 실무 프로젝트 스터디'}
        </Text>
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <UserGroupIcon width={16} />
            <Text>{memberCount ?? 8}/10명</Text>
          </div>
          <div className="flex items-center gap-1">
            <CalendarIcon width={16} />
            <Text>
              {formatedStartDate} ~ {formatedLastDate}
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
