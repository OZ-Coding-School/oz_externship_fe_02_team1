import BaseModal from '@components/common/modal/BaseModal'
import { ModalBody } from '@components/common/modal'
import { Input } from '@components/common/form'
import MODAL_PRESETS from '@components/common/modal/ModalPresets'

interface AddScheduleModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AddScheduleModal({
  isOpen,
  onClose,
}: AddScheduleModalProps) {
  const handleConfirm = () => {
    // TODO: Implement confirm logic
    onClose()
  }

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} size="md">
      {MODAL_PRESETS.scheduleAdd.header({
        onClose: onClose,
        title: '새 스케줄 추가',
      })}
      <ModalBody>
        <form className="space-y-4">
          <Input label="스케줄 이름" isRequired />
          <Input label="날짜" type="date" isRequired />
          <Input label="시간" type="time" isRequired />
        </form>
      </ModalBody>
      {MODAL_PRESETS.scheduleAdd.footer({
        onClose: onClose,
        onConfirm: handleConfirm,
      })}
    </BaseModal>
  )
}
