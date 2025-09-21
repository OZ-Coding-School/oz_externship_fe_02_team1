import { Button, Rating, Text } from '@components'

interface CompletedFooterProps {
  averageRating: number
  reviewCount: number
  navigateToGroupDetail: () => void
  onWriteReview: () => void // 모달을 열 함수를 prop으로 추가
}

interface InProgressFooterProps {
  navigateToGroupDetail: () => void
}

export const CompletedFooter = ({
  averageRating,
  reviewCount,
  navigateToGroupDetail,
  onWriteReview, // prop 받기
}: CompletedFooterProps) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex w-full justify-between">
        <div className="flex gap-2">
          <Text variant="small" className="font-medium text-gray-700">
            스터디 리뷰
          </Text>
          <div className="flex gap-1">
            <Rating readOnly={true} value={averageRating} />
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

export const InProgressFooter = ({
  navigateToGroupDetail,
}: InProgressFooterProps) => {
  return (
    <button
      type="button"
      onClick={navigateToGroupDetail}
      className="cursor-pointer"
    >
      <Text variant="small" className="font-medium text-yellow-600">
        자세히 보기 -&gt;
      </Text>
    </button>
  )
}
