import { DateRangeFields } from '@components'
import { MembersSlider } from '@components'
import { H2 } from '@/components'

interface PeriodMembersSectionProps {
  startDate: string
  endDate: string
  maxMembers: number
  hasRangeError: boolean
  onOpenStart: () => void
  onOpenEnd: () => void
  onChangeMaxMembers: (n: number) => void
}

const PeriodMembersSection = ({
  startDate,
  endDate,
  maxMembers,
  hasRangeError,
  onOpenStart,
  onOpenEnd,
  onChangeMaxMembers,
}: PeriodMembersSectionProps) => {
  return (
    <section className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <H2 className="mb-4">스터디 기간 및 인원</H2>

      <DateRangeFields
        startDate={startDate}
        endDate={endDate}
        hasRangeError={hasRangeError}
        openStartPicker={onOpenStart}
        openEndPicker={onOpenEnd}
      />

      {/* 인원 슬라이더 */}
      <MembersSlider value={maxMembers} onChange={onChangeMaxMembers} />
    </section>
  )
}

export default PeriodMembersSection
