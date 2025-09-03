import { useState, useId } from 'react'

import { timeInputButtonStyle } from '@/components/common/form/form.styles'
import type { TimeInputProps } from '@/components/common/form/form.type'

const TimeInput = ({
  label,
  fullWidth = true,
  defaultValue,
  onChange,
  times = Array.from({ length: 24 }, (_, h) =>
    ['00', '30'].map((m) => `${String(h).padStart(2, '0')}:${m}`)
  ).flat(),
  ref,
}: TimeInputProps) => {
  const autoId = useId()
  const inputId = autoId

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(defaultValue ?? null)

  const handleSelect = (time: string) => {
    setSelected(time)
    onChange?.(time)
    setOpen(false)
  }

  return (
    <div ref={ref} className={fullWidth ? 'w-full' : undefined}>
      {label && (
        <label
          htmlFor={inputId}
          className="mb-1.5 block text-sm text-[#374151]"
        >
          {label}
        </label>
      )}

      <button
        type="button"
        id={inputId}
        onClick={() => setOpen(!open)}
        className={timeInputButtonStyle()}
      >
        {selected ?? '시간을 선택하세요'}
      </button>

      {open && (
        <div className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-lg border border-gray-300 shadow-lg">
          {times.map((time) => (
            <div
              key={time}
              onClick={() => handleSelect(time)}
              className="cursor-pointer px-4 py-2 text-sm hover:bg-gray-100"
            >
              {time}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TimeInput
