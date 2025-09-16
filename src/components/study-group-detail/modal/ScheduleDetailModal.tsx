import MODAL_PRESETS from '@components/common/modal/ModalPresets'
import { BaseModal, H5, ModalBody, Text } from '@components'
import { studyGroupSchedule } from '@mocks/studyGroupDetail'

interface scheduleDetailModalProps {
  isOpen: boolean
  close: () => void
  confirm: () => void
}

export default function scheduleDetailModal({
  isOpen,
  close,
  confirm,
}: scheduleDetailModalProps) {
  const schedule = studyGroupSchedule[0]

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={close}
      size={MODAL_PRESETS.scheduleDetail.size}
      labelledById="modal-title"
    >
      {MODAL_PRESETS.scheduleDetail.header({
        onClose: close,
        title: '스터디 날짜 선택',
      })}

      <ModalBody className="space-y-6">
        <H5 className="text-gray-900">{schedule.title}</H5>
        <div className="flex flex-col gap-2">
          <Text variant="small" className="font-medium text-gray-700">
            스터디 목표
          </Text>
          <div className="rounded-lg bg-gray-50 p-4">{schedule.goal}</div>
        </div>
      </ModalBody>

      {MODAL_PRESETS.scheduleDetail.footer({
        onClose: close,
        onConfirm: confirm,
      })}
    </BaseModal>
  )
}
