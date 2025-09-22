import { CompletedFooter , InProgressFooter } from '@components'
import { STATUS_COMPLETED } from '@constants'

import type { StudyGroupStatus } from '@/types'

interface StudyGroupCardFooterProps {
  status: StudyGroupStatus
  navigateToGroupDetail: () => void
  onWriteReview?: () => void
  averageRating?: number
  reviewCount?: number
}

export default function StudyGroupCardFooter({
  status,
  navigateToGroupDetail,
  onWriteReview,
  averageRating,
  reviewCount,
}: StudyGroupCardFooterProps) {
  if (status === STATUS_COMPLETED) {
    return (
      <CompletedFooter
        averageRating={averageRating as number}
        reviewCount={reviewCount as number}
        navigateToGroupDetail={navigateToGroupDetail}
        onWriteReview={onWriteReview as () => void}
      />
    )
  }

  return <InProgressFooter navigateToGroupDetail={navigateToGroupDetail} />
}
