import {
  ImageCard,
  ReviewWriteModal,
  Text,
  StudyGroupCardOverlay,
  StudyGroupCardLectures,
  StudyGroupCardPeriod,
  StudyGroupCardFooter,
} from '@components'
import { useModal, usePageNav } from '@hooks'

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
    leader,
    uuid,
  } = studyGroup

  const { navigateToGroupDetail } = usePageNav()
  const { isOpen, openModal, closeModal } = useModal()

  const handleConfirmReview = (data: ReviewFormInputs) => {
    console.log('Review Data:', data)
    closeModal()
  }

  const ImageCardOverLay = (
    <StudyGroupCardOverlay
      status={status}
      isLeader={leader.isLeader}
      maxHeadcount={maxHeadcount}
      currentHeadcount={currentHeadcount}
    />
  )

  return (
    <div className="max-w-96 overflow-hidden">
      <ImageCard title={name} imgUrl={imgUrl} overlayContent={ImageCardOverLay}>
        <div className="flex max-w-96 flex-col gap-3 p-5">
          <Text variant="large" className="font-semibold text-gray-900">
            {name}
          </Text>
          <StudyGroupCardPeriod startAt={startAt} endAt={endAt} />
          <StudyGroupCardLectures lectures={lectures} />
          <StudyGroupCardFooter
            status={status}
            navigateToGroupDetail={() => navigateToGroupDetail(uuid)}
            onWriteReview={openModal}
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
