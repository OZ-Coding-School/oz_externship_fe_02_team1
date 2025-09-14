import { MIN_MEMBERS, MAX_MEMBERS, Text } from '@components'
import {
  SLIDER_BASE,
  SLIDER_THUMB,
  SLIDER_TRACK,
} from '@components/create-group/MembersSlider.styles'
import { UserGroupIcon } from '@heroicons/react/24/outline'
import { cn } from '@utils'

interface MembersInputProps {
  value: number
  onChange: (v: number) => void
  className: string
}

const MembersSlider = ({ value, onChange, className }: MembersInputProps) => (
  <div className={cn('', className)}>
    <div className="mb-2 flex items-center justify-between">
      <label htmlFor="maxMembers" className="text-sm">
        <Text className="text-gray-700" variant="small">
          최대 인원 수
        </Text>
        <Text className="text-danger-500 ml-0.5" variant="small">
          *
        </Text>
      </label>
    </div>

    <div className="flex gap-4">
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
        className={cn(SLIDER_BASE, SLIDER_TRACK, SLIDER_THUMB)}
      />
      <div className="flex items-center">
        <UserGroupIcon width={16} className="text-gray-400" />
        <Text
          className="mx-2 w-8 text-center text-lg font-semibold text-gray-900"
          variant="small"
        >
          {value}
        </Text>
        <Text className="text-gray-600" variant="small">
          명
        </Text>
      </div>
    </div>

    <div className="mt-1 flex justify-between text-[12px] leading-5 text-gray-400">
      <Text className="text-gray-500" variant="extraSmall">
        {MIN_MEMBERS}명
      </Text>
      <Text className="text-gray-500" variant="extraSmall">
        {MAX_MEMBERS}명
      </Text>
    </div>
  </div>
)

export default MembersSlider
