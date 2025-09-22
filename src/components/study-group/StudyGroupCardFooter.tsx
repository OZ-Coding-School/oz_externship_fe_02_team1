import { Button, Rating, Text } from '@components'
import { studyGroupReview } from '@mocks/studyGroupDetail'
import { calculateAverageRating } from '@utils'

import type { StudyGroupStatus } from '@/types'

interface StudyGroupCardFooterProps {
  status: StudyGroupStatus
  navigateToGroupDetail: () => void

  onWriteReview?: () => void
}

export default function StudyGroupCardFooter({
  status,
  navigateToGroupDetail,
  onWriteReview,
}: StudyGroupCardFooterProps) {
  const averageRating = calculateAverageRating(studyGroupReview)
  const reviewCount = studyGroupReview.length

  if (status === '종료됨') {
    return (
      <div className="flex w-full flex-col justify-end gap-2 border-t border-gray-100 pt-3">
        <div className="flex w-full justify-between">
          <div className="flex gap-2">
            <Text variant="small" className="font-medium text-gray-700">
              스터디 리뷰
            </Text>
            <div className="flex gap-1">
              <Rating readOnly value={averageRating} />
              <Text>
                {averageRating}({reviewCount})
              </Text>
            </div>
          </div>
          <button
            type="button"
            onClick={navigateToGroupDetail}
            className="cursor-pointer"
          >
            <Text variant="small" className="font-medium text-yellow-600">
              상세보기
            </Text>
          </button>
        </div>

        {reviewCount > 0 ? (
          <Button
            type="button"
            onClick={onWriteReview}
            className="flex items-center justify-center bg-slate-500 py-2"
          >
            <Text variant="small" className="font-medium">
              리뷰 수정하기
            </Text>
          </Button>
        ) : (
          <Button
            variant="primary"
            type="button"
            onClick={onWriteReview}
            className="flex items-center justify-center py-2"
          >
            <Text variant="small" className="font-medium">
              리뷰 작성하기
            </Text>
          </Button>
        )}
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={navigateToGroupDetail}
      className="flex cursor-pointer justify-end"
    >
      <Text variant="small" className="font-medium text-yellow-600">
        자세히 보기 -&gt;
      </Text>
    </button>
  )
}
