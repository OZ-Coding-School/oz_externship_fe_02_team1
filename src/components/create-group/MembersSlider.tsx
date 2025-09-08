import { cn } from '@/utils'
import { MIN_MEMBERS, MAX_MEMBERS } from '@/components/create-group/constants'

type Props = {
  value: number
  onChange: (v: number) => void
}

const MembersSlider = ({ value, onChange }: Props) => (
  <div className="mt-6">
    <div className="mb-2 flex items-center justify-between">
      <label htmlFor="maxMembers" className="text-sm text-gray-700">
        최대 인원 수 *
      </label>
      <span className="text-sm text-gray-600">{value} 명</span>
    </div>

    <input
      id="maxMembers"
      type="range"
      min={MIN_MEMBERS}
      max={MAX_MEMBERS}
      step={1}
      value={value}
      onChange={(e) => onChange(e.currentTarget.valueAsNumber)}
      aria-valuemin={MIN_MEMBERS}
      aria-valuemax={MAX_MEMBERS}
      aria-valuenow={value}
      className={cn(
        'w-full appearance-none focus:outline-none',
        '[&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-gray-200',
        '[&::-moz-range-track]:h-2 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-gray-200',
        // thumb h-5 vs track h-2 → mt = -(20-8)/2 = -6
        '[&::-webkit-slider-thumb]:bg-primary-500 [&::-webkit-slider-thumb]:mt-[-6px] [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow',
        '[&::-moz-range-thumb]:bg-primary-500 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow'
      )}
    />

    <div className="mt-1 flex justify-between text-[12px] leading-5 text-gray-400">
      <span>{MIN_MEMBERS}명</span>
      <span>{MAX_MEMBERS}명</span>
    </div>
  </div>
)

export default MembersSlider
