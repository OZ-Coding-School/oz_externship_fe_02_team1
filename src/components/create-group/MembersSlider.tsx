import { cn } from '@utils'

import {
  SLIDER_BASE,
  SLIDER_THUMB,
  SLIDER_TRACK,
} from '@components/create-group/MembersSlider.styles'
import { MIN_MEMBERS, MAX_MEMBERS } from '@components'
import { Text } from '@/components'

interface MembersInputProps {
  value: number
  onChange: (v: number) => void
}

const MembersSlider = ({ value, onChange }: MembersInputProps) => (
  <div className="mt-6">
    <div className="mb-2 flex items-center justify-between">
      <label htmlFor="maxMembers" className="text-sm">
        <Text className="text-gray-700" variant="small">
          최대 인원 수
        </Text>
        <Text className="text-danger-500 ml-0.5" variant="small">
          *
        </Text>
      </label>
      <Text className="text-gray-600" variant="small">
        {value} 명
      </Text>
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
      className={cn(SLIDER_BASE, SLIDER_TRACK, SLIDER_THUMB)}
    />

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
