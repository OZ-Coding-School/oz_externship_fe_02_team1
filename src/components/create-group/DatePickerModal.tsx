import Calendar from '@components/common/date-picker/Calendar'
import BaseModal from '@components/common/modal/BaseModal'
import ModalBody from '@components/common/modal/ModalBody'
import MODAL_PRESETS from '@components/common/modal/ModalPresets'

import type { DateKind } from '@components/create-group/types'

interface DatePickerModalProps {
  isOpen: boolean
  kind: DateKind | null
  tempDate?: Date
  setTempDate: (d?: Date) => void
  close: () => void
  confirm: () => void
  confirmDisabled?: boolean
  minEndForEndPicker?: Date
  endDate: string
}

const DatePickerModal = ({
  isOpen,
  kind,
  tempDate,
  setTempDate,
  close,
  confirm,
  confirmDisabled,
  minEndForEndPicker,
  endDate,
}: DatePickerModalProps) => (
  <BaseModal
    isOpen={isOpen}
    onClose={close}
    size={MODAL_PRESETS.dateSelect.size}
    labelledById="modal-title"
    describedById="modal-sub"
  >
    {MODAL_PRESETS.dateSelect.header({
      onClose: close,
      title: kind === 'start' ? '스터디 시작일 선택' : '스터디 종료일 선택',
      subTitle:
        kind === 'end'
          ? '종료일은 시작일로부터 최소 5일 이후를 선택하세요'
          : undefined,
    })}

    <ModalBody>
      <Calendar
        variant="bare"
        width="fluid"
        selected={tempDate}
        onSelect={(d) => d && setTempDate(d)}
        disabledBefore={kind === 'end' ? minEndForEndPicker : undefined}
        disabledAfter={
          kind === 'start' && endDate ? new Date(endDate) : undefined
        }
      />
    </ModalBody>

    {MODAL_PRESETS.dateSelect.footer({
      onClose: close,
      onConfirm: confirm,
      confirmDisabled,
    })}
  </BaseModal>
)

export default DatePickerModal
