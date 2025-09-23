import {
  ImageCard,
  ReviewWriteModal,
  Text,
  StudyGroupCardOverlay,
  StudyGroupCardFooter,
  StudyGroupCardBody,
} from '@components'
import { useModal, usePageNav } from '@hooks'
import { studyGroupReview } from '@mocks/datas/studyGroupDetail'
import { calculateAverageRating } from '@utils'

import type { ReviewFormInputs } from './modal/ReviewWriteModal'
import type { StudyGroupList } from '@models'

interface StudyGroupCardProps {
  studyGroup: StudyGroupList
}

export default function StudyGroupCard({ studyGroup }: StudyGroupCardProps) {
  const {
    lectures,
    startAt,
    endAt,
    imgUrl,
    name,
    status,
    maxHeadcount,
    currentHeadcount,
    isLeader,
    uuid,
  } = studyGroup

  const { navigateToGroupDetail } = usePageNav()
  const { isOpen, openModal, closeModal } = useModal()
  const averageRating = calculateAverageRating(studyGroupReview)
  const reviewCount = studyGroupReview.length

  // api연동후 api폴더로 이동예정
  const handleConfirmReview = (data: ReviewFormInputs) => {
    console.log('Review Data:', data)
    closeModal()
  }

  return (
    <div className="max-w-96 overflow-hidden">
      <ImageCard
        title={name}
        imageUrl={imgUrl}
        overlayContent={
          <StudyGroupCardOverlay
            status={status}
            isLeader={isLeader}
            maxHeadcount={maxHeadcount}
            currentHeadcount={currentHeadcount}
          />
        }
      >
        <div className="flex flex-col gap-3 p-5">
          <Text variant="large" className="font-semibold text-gray-900">
            {name}
          </Text>
          <StudyGroupCardBody
            startAt={startAt}
            endAt={endAt}
            lectures={lectures}
          />
          <StudyGroupCardFooter
            status={status}
            navigateToGroupDetail={() => navigateToGroupDetail(uuid)}
            onWriteReview={openModal}
            averageRating={averageRating}
            reviewCount={reviewCount}
          />
        </div>
      </ImageCard>
      <ReviewWriteModal
        isOpen={isOpen}
        onClose={closeModal}
        confirm={handleConfirmReview}
      />
    </div>
  )
}
