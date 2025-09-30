import { CompletedFooter, InProgressFooter } from '@components'

import { STUDY_GROUP_STATUS } from '@/constants'
import type { StudyGroupStatus } from '@/types'

interface StudyGroupCardFooterProps {
  status: StudyGroupStatus
  navigateToGroupDetail: () => void
  onWriteReview?: () => void
  onViewReviews?: () => void
  averageRating?: number
  reviewCount?: number
}

export default function StudyGroupCardFooter({
  status,
  navigateToGroupDetail,
  onWriteReview,
  onViewReviews,
  averageRating,
  reviewCount,
}: StudyGroupCardFooterProps) {
  if (status === STUDY_GROUP_STATUS.COMPLETED) {
    return (
      <CompletedFooter
        averageRating={averageRating as number}
        reviewCount={reviewCount as number}
        onWriteReview={onWriteReview as () => void}
        onViewReviews={onViewReviews as () => void}
      />
    )
  }

  return <InProgressFooter navigateToGroupDetail={navigateToGroupDetail} />
}
