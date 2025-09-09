import { DateInput } from '@components'

interface DateRangeFieldsProps {
  startDate: string
  endDate: string
  hasRangeError: boolean
  openStartPicker: () => void
  openEndPicker: () => void
}

const DateRangeFields = ({
  startDate,
  endDate,
  hasRangeError,
  openStartPicker,
  openEndPicker,
}: DateRangeFieldsProps) => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
    <div className="relative">
      <DateInput
        label="스터디 시작일"
        required
        value={startDate}
        onOpenCalendar={openStartPicker}
        placeholder="날짜를 선택하세요"
        aria-label="스터디 시작일"
      />
    </div>

    <div className="relative">
      <DateInput
        label="스터디 종료일"
        required
        value={endDate}
        onOpenCalendar={openEndPicker}
        placeholder="날짜를 선택하세요"
        invalid={hasRangeError}
        errorText={
          hasRangeError
            ? '종료일은 시작일로부터 최소 5일 이후여야 합니다.'
            : undefined
        }
        aria-label="스터디 종료일"
      />
    </div>
  </div>
)

export default DateRangeFields
