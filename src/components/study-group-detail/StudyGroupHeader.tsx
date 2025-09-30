import {
  UserGroupIcon,
  CalendarIcon,
  ArrowLeftStartOnRectangleIcon,
  PencilIcon,
} from '@heroicons/react/24/outline'

import { Images } from '@assets'
import { Button, StudyBadge, Text } from '@components'
import { usePageNav } from '@hooks'
import { formatDate } from '@utils'

import type { StudyGroupDetail } from '@models'

interface StudyGroupHeaderProps
  extends Pick<
    StudyGroupDetail,
    | 'imgUrl'
    | 'name'
    | 'currentHeadcount'
    | 'maxHeadcount'
    | 'startAt'
    | 'status'
    | 'endAt'
  > {
  currentUserRole?: 'member' | 'leader' | 'guest'
  isMember?: boolean
}

export default function StudyGroupHeader({
  imgUrl,
  name,
  currentHeadcount,
  maxHeadcount,
  startAt,
  endAt,
  status,
  currentUserRole,
  isMember,
}: StudyGroupHeaderProps) {
  const { navigateToGroupEdit } = usePageNav()

  const formattedStartDate = formatDate(new Date(startAt))
  const formattedLastDate = formatDate(new Date(endAt))

  return (
    <header className="relative aspect-[1.5/1] overflow-hidden rounded-lg bg-gray-500 sm:aspect-[2/1]">
      <img
        className="h-full w-full"
        src={imgUrl ?? Images.studyGroupDefault}
        alt={`${name} 스터디 그룹 이미지`}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute bottom-6 left-6 flex flex-col gap-2">
        <Text className="text-lg font-bold text-white sm:text-xl md:text-3xl">
          {name}
        </Text>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
          <div className="flex items-center gap-1">
            <UserGroupIcon width={16} className="text-white" />
            <Text className="sm:text-md text-xs text-white">
              {currentHeadcount}/{maxHeadcount}명
            </Text>
          </div>
          <div className="flex items-center gap-1">
            <CalendarIcon width={16} className="text-white" />
            <Text className="sm:text-md text-xs text-white">
              {formattedStartDate} ~ {formattedLastDate}
            </Text>
          </div>
          <StudyBadge
            variant={status}
            className="flex self-start px-2 sm:px-3"
          />
        </div>
      </div>

      <div className="absolute top-6 right-6 flex gap-3">
        {currentUserRole === 'leader' && (
          <Button
            type="button"
            variant="ghost"
            className="bg-white py-2"
            onClick={navigateToGroupEdit}
          >
            <PencilIcon width={16} />
            수정하기
          </Button>
        )}
        {isMember && (
          <Button type="button" variant="danger" className="py-2">
            <ArrowLeftStartOnRectangleIcon width={16} />
            나가기
          </Button>
        )}
      </div>
    </header>
  )
}
