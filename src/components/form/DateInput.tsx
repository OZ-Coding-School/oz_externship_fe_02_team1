import { forwardRef, useId, type InputHTMLAttributes } from 'react'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'readOnly'> {
  label?: string
  onOpenCalendar?: () => void // 달력 모달 트리거
  invalid?: boolean // 폼 검증 결과(테두리만 빨강)
  helperText?: string // 보조 설명 (선택)
  // 개발자가 helperText="비밀번호는 최소 8자 이상" 이런 식으로 내려주면, 인풋 밑에 작은 글씨로 안내 문구가 표시
}

export const DateInput = forwardRef<HTMLInputElement, Props>(
  (
    { label, id, onOpenCalendar, invalid, helperText, className, ...rest },
    ref
  ) => {
    const autoId = useId()
    const inputId = id ?? autoId

    const describedByIds: string[] = []
    if (helperText) describedByIds.push(`${inputId}-desc`)

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
            className={[
              'w-full rounded-[8px] border text-[14px] transition-colors outline-none',
              // 패딩 (아이콘 공간 확보)
              'px-[17px] py-[13px] pr-10',
              // 상태별 보더
              invalid
                ? 'border-danger-100'
                : 'focus:border-primary-500 border-gray-300 focus:border-2',
              className ?? '',
            ].join(' ')}
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

        {helperText && (
          <p
            id={`${inputId}-desc`}
            className="mt-1 text-[12px] leading-5 text-gray-500"
          >
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

DateInput.displayName = 'DateInput'
