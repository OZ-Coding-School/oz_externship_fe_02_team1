import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import { useId, type InputHTMLAttributes, type Ref } from 'react'

import { dateInputStyle } from '@components/common/form/form.styles'

interface DateInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'readOnly'> {
  label?: string
  value?: string
  onOpenCalendar?: () => void
  invalid?: boolean
  errorText?: string
  ref?: Ref<HTMLInputElement>
  required?: boolean
  placeholder?: string
}

const DateInput = ({
  label,
  id,
  onOpenCalendar,
  invalid,
  errorText,
  className,
  ref,
  required,
  placeholder,
  ...rest
}: DateInputProps) => {
  const autoId = useId()
  const inputId = id ?? autoId

  const describedByIds: string[] = []
  if (errorText) describedByIds.push(`${inputId}-desc`)

  const handleMouseDown: React.MouseEventHandler<HTMLInputElement> = (e) => {
    if (!onOpenCalendar) return
    e.preventDefault()
    onOpenCalendar()
  }

  return (
    <div>
      {label && (
        <label htmlFor={inputId} className="mb-1.5 block text-sm text-gray-700">
          {label} {required && <span className="text-danger-500">*</span>}
        </label>
      )}

      <div className="relative">
        <input
          {...rest}
          value={rest.value}
          id={inputId}
          ref={ref}
          readOnly
          placeholder={placeholder ?? '날짜를 선택하세요'}
          aria-invalid={invalid || undefined}
          aria-describedby={
            describedByIds.length ? describedByIds.join(' ') : undefined
          }
          className={dateInputStyle({ invalid, className })}
          onMouseDown={handleMouseDown}
        />

        <button
          type="button"
          aria-label="달력 열기"
          onClick={onOpenCalendar}
          className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500"
        >
          <CalendarDaysIcon className="h-5 w-5" />
        </button>
      </div>

      {errorText && (
        <p
          id={`${inputId}-desc`}
          className="text-danger-600 mt-1 text-[12px] leading-5"
        >
          {errorText}
        </p>
      )}
    </div>
  )
}

export default DateInput
