import { formatToYMD } from '@utils'
import { Card, DateInput, MembersSlider, DatePickerModal } from '@components'
import useDateModal from '@hooks/useDateModal'

interface PeriodMemberSectionProps {
  startDate: string
  endDate: string
  memberCount: number
  onStartDateChange: (date: string) => void
  onEndDateChange: (date: string) => void
  onMemberCountChange: (count: number) => void
}

export default function PeriodMemberSection({
  startDate,
  endDate,
  memberCount,
  onStartDateChange,
  onEndDateChange,
  onMemberCountChange,
}: PeriodMemberSectionProps) {
  const {
    openDateKind,
    tempDate,
    setTempDate,
    openStartPicker,
    openEndPicker,
    closeDateModal,
    confirmDateModal,
    minEndForEndPicker,
    confirmDisabled,
    hasRangeError,
  } = useDateModal({
    startDate,
    endDate,
    setStartDate: onStartDateChange,
    setEndDate: onEndDateChange,
  })

  return (
    <>
      <Card
        title="스터디 기간 및 인원"
        titleClassName="text-xl pb-0"
        cardClassName="lg:p-8 gap-6"
      >
        <div className="grid grid-cols-2 grid-rows-2 gap-6">
          <DateInput
            label="스터디 시작일"
            required
            value={startDate && formatToYMD(startDate)}
            onOpenCalendar={openStartPicker}
            placeholder="날짜를 선택하세요"
            aria-label="스터디 시작일"
          />
          <DateInput
            label="스터디 종료일"
            required
            value={endDate && formatToYMD(endDate)}
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
          <MembersSlider
            className="col-span-2"
            value={memberCount}
            onChange={onMemberCountChange}
          />
        </div>
      </Card>

      <DatePickerModal
        isOpen={!!openDateKind}
        kind={openDateKind}
        tempDate={tempDate}
        setTempDate={setTempDate}
        close={closeDateModal}
        confirm={confirmDateModal}
        confirmDisabled={confirmDisabled}
        minEndForEndPicker={minEndForEndPicker}
        endDate={endDate}
      />
    </>
  )
}
