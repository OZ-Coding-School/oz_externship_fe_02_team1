import { cn } from '@/utils'
import DateInput from '@/components/common/form/DateInput'
import { MIN_MEMBERS, MAX_MEMBERS } from './constants'

type Props = {
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
}: Props) => {
  return (
    <section className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-base font-semibold text-gray-900">
        스터디 기간 및 인원
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="relative">
          <DateInput
            label="스터디 시작일 *"
            value={startDate}
            onOpenCalendar={onOpenStart}
            placeholder="날짜를 선택하세요"
            aria-label="스터디 시작일"
          />
        </div>

        <div className="relative">
          <DateInput
            label="스터디 종료일 *"
            value={endDate}
            onOpenCalendar={onOpenEnd}
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

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="maxMembers" className="text-sm text-gray-700">
            최대 인원 수 *
          </label>
          <span className="text-sm text-gray-600">{maxMembers} 명</span>
        </div>

        <input
          id="maxMembers"
          type="range"
          min={MIN_MEMBERS}
          max={MAX_MEMBERS}
          step={1}
          value={maxMembers}
          onChange={(e) => onChangeMaxMembers(e.currentTarget.valueAsNumber)}
          aria-valuemin={MIN_MEMBERS}
          aria-valuemax={MAX_MEMBERS}
          aria-valuenow={maxMembers}
          className={cn(
            'w-full appearance-none focus:outline-none',
            '[&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-gray-200',
            '[&::-moz-range-track]:h-2 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-gray-200',
            '[&::-webkit-slider-thumb]:bg-primary-500 [&::-webkit-slider-thumb]:mt-[-6px] [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow',
            '[&::-moz-range-thumb]:bg-primary-500 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow'
          )}
        />

        <div className="mt-1 flex justify-between text-[12px] leading-5 text-gray-400">
          <span>{MIN_MEMBERS}명</span>
          <span>{MAX_MEMBERS}명</span>
        </div>
      </div>
    </section>
  )
}

export default PeriodMembersSection
