import { BaseModal, MODAL_PRESETS, ModalBody, Rating, Text } from '@components'
import { studyGroupReview } from '@mocks/studyGroupDetail'
import { cn, formatDate, calculateAverageRating } from '@utils'

interface ReviewListModalProps {
  isOpen: boolean
  onClose: () => void
  confirm: () => void
}

export default function ReviewListModal({
  isOpen,
  onClose,
  confirm,
}: ReviewListModalProps) {
  const totalReviewCount = studyGroupReview.length
  const averageRaging = calculateAverageRating(studyGroupReview)

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      size={MODAL_PRESETS.studyReview.size}
      labelledById="modal-title"
    >
      {MODAL_PRESETS.studyReview.header({
        onClose: onClose,
      })}

      <ModalBody className="space-y-8">
        <div className="flex flex-col items-center gap-2 border-b border-gray-200 pb-6">
          <div className="flex items-center gap-2">
            <Rating
              value={averageRaging}
              iconSize={16}
              className="gap-0"
              readOnly
            />
            <Text className="text-2xl font-bold text-gray-900">
              {averageRaging}
            </Text>
          </div>
          <Text className="text-gray-600">총 {totalReviewCount}개의 리뷰</Text>
        </div>

        {studyGroupReview.length > 0 ? (
          <div className="flex flex-col gap-6">
            {studyGroupReview.map((review, index) => (
              <div
                key={review.id}
                className={cn(
                  'flex flex-col gap-3 pb-6',
                  index !== studyGroupReview.length - 1 &&
                    'border-b border-gray-100'
                )}
              >
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <Rating
                      value={review.rating}
                      iconSize={16}
                      className="gap-0"
                      readOnly
                    />
                    <Text variant="small" className="text-gray-700">
                      {review.rating}/5
                    </Text>
                  </div>
                  <Text variant="small" className="text-gray-500">
                    {formatDate(review.createDate)}
                  </Text>
                </div>
                <Text className="text-gray-700">{review.content}</Text>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-lg bg-gray-100 py-10 text-center">
            <Text className="text-gray-600">등록된 리뷰가 없습니다.</Text>
          </div>
        )}
      </ModalBody>

      {MODAL_PRESETS.studyReview.footer({
        onClose: onClose,
        onConfirm: confirm,
      })}
    </BaseModal>
  )
}
