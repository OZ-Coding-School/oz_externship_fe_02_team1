import { useState, forwardRef, useId } from 'react'

interface TimeInputProps {
  label?: string
  errorText?: string
  fullWidth?: boolean
  defaultValue?: string
  onChange?: (value: string) => void
  times?: string[] // 표시할 시간 리스트
}

export const TimeInput = forwardRef<HTMLDivElement, TimeInputProps>(
  (
    {
      label,
      errorText,
      fullWidth = true,
      defaultValue,
      onChange,
      times = Array.from({ length: 24 }, (_, h) =>
        ['00', '30'].map((m) => `${String(h).padStart(2, '0')}:${m}`)
      ).flat(),
    },
    ref
  ) => {
    const autoId = useId()
    const inputId = autoId
    const hasError = Boolean(errorText)

    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState<string | null>(
      defaultValue ?? null
    )

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

        {/* 선택 박스 */}
        <button
          type="button"
          id={inputId}
          onClick={() => setOpen(!open)}
          aria-invalid={hasError || undefined}
          className={[
            'w-full rounded-[8px] border bg-white text-left text-[14px] transition-colors outline-none',
            hasError
              ? 'border-danger-100'
              : 'focus:border-primary-500 border-gray-300 focus:border-2',
            'px-[17px] py-[13px]',
          ].join(' ')}
        >
          {selected ?? '시간을 선택하세요'}
        </button>

        {/* 드롭다운 */}
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
)

TimeInput.displayName = 'TimeInput'
