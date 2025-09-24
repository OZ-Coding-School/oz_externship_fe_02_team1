import {
  Button,
  ReviewListModal,
  ReviewWriteModal,
  AddScheduleModal,
  ScheduleDetailModal,
} from '@components'
import { usePageNav, useModal } from '@hooks'
import { studyGroupSchedule } from '@mocks/datas/studyGroupDetail'

export default function TestLanding() {
  const { navigateToGroupList } = usePageNav()

  const reviewListModal = useModal()
  const reviewWriteModal = useModal()
  const addScheduleModal = useModal()
  const scheduleDetailModal = useModal()

  return (
    <div className="flex flex-col gap-4 p-8">
      <Button size="large" onClick={() => navigateToGroupList()}>
        스터디그룹 목록으로 이동
      </Button>

      <h2>모달 테스트</h2>
      <div className="flex flex-wrap gap-2">
        <Button variant="secondary" onClick={reviewListModal.openModal}>
          리뷰 목록 조회 모달
        </Button>
        <ReviewListModal
          isOpen={reviewListModal.isOpen}
          onClose={reviewListModal.closeModal}
          confirm={() => {}}
        />

        <Button variant="secondary" onClick={reviewWriteModal.openModal}>
          리뷰 작성 모달
        </Button>
        <ReviewWriteModal
          isOpen={reviewWriteModal.isOpen}
          onClose={reviewWriteModal.closeModal}
          confirm={() => {}}
        />

        <Button variant="secondary" onClick={addScheduleModal.openModal}>
          스케줄 추가 모달
        </Button>
        <AddScheduleModal
          isOpen={addScheduleModal.isOpen}
          onClose={addScheduleModal.closeModal}
        />

        <Button variant="secondary" onClick={scheduleDetailModal.openModal}>
          스케줄 조회 모달
        </Button>
        <ScheduleDetailModal
          isOpen={scheduleDetailModal.isOpen}
          onClose={scheduleDetailModal.closeModal}
          confirm={() => {}}
          schedule={studyGroupSchedule[2]}
        />
      </div>
    </div>
  )
}
