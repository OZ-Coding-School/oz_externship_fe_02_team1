import { forwardRef, useId, type InputHTMLAttributes } from 'react'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'readOnly'> {
  label?: string
  onOpenCalendar?: () => void
  invalid?: boolean // 폼 검증 결과(테두리만 빨강)
  errorText?: string // 에러 설명 (선택)
}

const DateInput = forwardRef<HTMLInputElement, Props>(
  (
    { label, id, onOpenCalendar, invalid, errorText, className, ...rest },
    ref
  ) => {
    const autoId = useId()
    const inputId = id ?? autoId

    const describedByIds: string[] = []
    if (errorText) describedByIds.push(`${inputId}-desc`)

    return (
      <div>
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-sm text-gray-700"
          >
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
            className={clsx(
              'w-full rounded-[8px] border text-[14px] transition-colors outline-none',
              'px-[17px] py-[13px] pr-10',
              {
                'border-danger-100': invalid,
                'focus:border-primary-500 border-gray-300 focus:border-2':
                  !invalid,
              },
              className
            )}
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
)

DateInput.displayName = 'DateInput'
export default DateInput
