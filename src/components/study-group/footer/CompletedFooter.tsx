import { Button, Rating, Text } from '@components'

import { cn } from '@utils'

interface CompletedFooterProps {
  averageRating: number
  reviewCount: number
  navigateToGroupDetail: () => void
  onWriteReview: () => void
}

export default function CompletedFooter({
  averageRating,
  reviewCount,
  navigateToGroupDetail,
  onWriteReview,
}: CompletedFooterProps) {
  const hasReview = reviewCount > 0
  const reviewButtonText = hasReview ? '리뷰 수정하기' : '리뷰 작성하기'

  return (
    <div className="flex w-full flex-col justify-end gap-2 border-t border-gray-100 pt-3">
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-2">
          <Text variant="small" className="font-medium text-gray-700">
            스터디 리뷰
          </Text>
          <div className="flex gap-1">
            <Rating readOnly value={averageRating} iconSize={16} />
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

      <Button
        type="button"
        variant={hasReview ? 'secondary' : 'primary'}
        onClick={onWriteReview}
        className={cn('flex items-center justify-center py-2', {
          'bg-slate-500': hasReview,
        })}
      >
        <Text variant="small" className="font-medium text-white">
          {reviewButtonText}
        </Text>
      </Button>
    </div>
  )
}
