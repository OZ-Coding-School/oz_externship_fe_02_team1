import type { InputHTMLAttributes, Ref } from 'react'

import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import { useId } from 'react'

import { dateInputStyle } from '@components/common/form/form.styles'

interface DateInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'readOnly'> {
  label?: string
  onOpenCalendar?: () => void
  invalid?: boolean // 폼 검증 결과(테두리만 빨강)
  errorText?: string // 에러 설명 (선택)
  ref?: Ref<HTMLInputElement>
}

const DateInput = ({
  label,
  id,
  onOpenCalendar,
  invalid,
  errorText,
  className,
  ref,
  ...rest
}: DateInputProps) => {
  const autoId = useId()
  const inputId = id ?? autoId

  const describedByIds: string[] = []
  if (errorText) describedByIds.push(`${inputId}-desc`)

  return (
    <div>
      {label && (
        <label htmlFor={inputId} className="mb-1.5 block text-sm text-gray-700">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          {...rest}
          id={inputId}
          ref={ref}
          readOnly
          placeholder="날짜를 선택하세요"
          aria-invalid={invalid || undefined}
          aria-describedby={
            describedByIds.length ? describedByIds.join(' ') : undefined
          }
          className={dateInputStyle({ invalid, className })}
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
