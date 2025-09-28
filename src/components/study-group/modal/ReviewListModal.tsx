import {
  BaseModal,
  MODAL_PRESETS,
  ModalBody,
  Rating,
  Text,
  LoadingState,
  ErrorState,
  BaseEmptyState,
} from '@components'
import { useReviewListQuery } from '@hooks'
import { studyGroupList } from '@mocks/datas/studygroupList'
import { cn, formatDate } from '@utils'

interface ReviewListModalProps {
  groupUuid: string
  isOpen: boolean
  onClose: () => void
  confirm: () => void
}

export default function ReviewListModal({
  groupUuid,
  isOpen,
  onClose,
  confirm,
}: ReviewListModalProps) {
  const { data, isLoading, isError, refetch } = useReviewListQuery(groupUuid)

  const reviews = data?.results || []
  const totalReviewCount = data?.count || 0
  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((acc, review) => acc + review.starRating, 0) /
          reviews.length
        ).toFixed(1)
      : '0.0'

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      size={MODAL_PRESETS.studyReview.size}
      labelledById="modal-title"
    >
      {MODAL_PRESETS.studyReview.header({
        subTitle: studyGroupList.find((group) => group.uuid === groupUuid)
          ?.name,
        onClose: onClose,
      })}

      {isLoading && <LoadingState />}
      {isError && (
        <div className="flex items-center justify-center py-20">
          <ErrorState onRetry={refetch} />
        </div>
      )}
      {!isLoading && !isError && (
        <>
          <ModalBody>
            <div className="space-y-8">
              <div className="flex flex-col items-center gap-2 border-b border-gray-200 pb-6">
                <div className="flex items-center gap-2">
                  <Rating
                    value={Number(averageRating)}
                    iconSize={16}
                    className="gap-0"
                    readOnly
                  />
                  <Text className="text-2xl font-bold">{averageRating}</Text>
                </div>
                <Text className="text-gray-600">
                  총 {totalReviewCount}개의 리뷰
                </Text>
              </div>

              {reviews.length > 0 ? (
                <div className="flex flex-col gap-6">
                  {reviews.map((review, index) => (
                    <div
                      key={review.id}
                      className={cn(
                        'flex flex-col gap-3 pb-6',
                        index !== reviews.length - 1 &&
                          'border-b border-gray-100'
                      )}
                    >
                      <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                          <Rating
                            value={review.starRating}
                            iconSize={16}
                            className="gap-0"
                            readOnly
                          />
                          <Text variant="small" className="font-bold">
                            {review.authorNickname}
                          </Text>
                        </div>
                        <Text variant="small" className="text-gray-500">
                          {formatDate(new Date(review.createdAt))}
                        </Text>
                      </div>
                      <Text className="text-gray-700">{review.content}</Text>
                    </div>
                  ))}
                </div>
              ) : (
                <BaseEmptyState
                  title="등록된 리뷰가 없습니다"
                  description="이 스터디의 첫 번째 리뷰를 작성해보세요."
                />
              )}
            </div>
          </ModalBody>

          {MODAL_PRESETS.studyReview.footer({
            onClose: onClose,
            onConfirm: confirm,
          })}
        </>
      )}
    </BaseModal>
  )
}
