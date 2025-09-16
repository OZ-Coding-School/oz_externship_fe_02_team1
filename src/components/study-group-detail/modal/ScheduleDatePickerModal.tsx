import { Calendar, BaseModal, ModalBody } from '@components'
import MODAL_PRESETS from '@components/common/modal/ModalPresets'

interface ScheduleDatePickerModalProps {
  isOpen: boolean
  tempDate?: Date
  setTempDate: (d?: Date) => void
  close: () => void
  confirm: () => void
  confirmDisabled?: boolean
}

export default function ScheduleDatePickerModal({
  isOpen,
  tempDate,
  setTempDate,
  close,
  confirm,
  confirmDisabled,
}: ScheduleDatePickerModalProps) {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={close}
      size={MODAL_PRESETS.dateSelect.size}
      labelledById="modal-title"
    >
      {MODAL_PRESETS.dateSelect.header({
        onClose: close,
        title: '스터디 날짜 선택',
      })}

      <ModalBody>
        <Calendar
          variant="bare"
          width="fluid"
          selected={tempDate}
          onSelect={(d) => d && setTempDate(d)}
        />
      </ModalBody>

      {MODAL_PRESETS.dateSelect.footer({
        onClose: close,
        onConfirm: confirm,
        confirmDisabled,
      })}
    </BaseModal>
  )
}
