import { forwardRef, useId } from 'react'
import clsx from 'clsx'

interface InputProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  label?: string
  errorText?: string
  fullWidth?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      errorText,
      disabled,
      placeholder,
      className,
      fullWidth = true,
      leftIcon,
      rightIcon,
      ...rest
    },
    ref
  ) => {
    const autoId = useId()
    const inputId = id ?? autoId
    const hasError = !!errorText

    const base =
      'w-full rounded-[8px] border bg-white text-[14px] outline-none transition-colors'
    const border = hasError ? 'border-danger-100' : 'border-gray-300'
    const focus = hasError
      ? 'focus:border-danger-100'
      : 'focus:border-2 focus:border-primary-500'
    const disabledCls =
      'disabled:bg-gray-50 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-400 disabled:cursor-not-allowed'

    // 기본: 좌우 17, 위아래 13
    // 아이콘 있을 때: 왼쪽 41, 위아래 13, 오른쪽 17
    const padding = leftIcon
      ? 'pl-[41px] pr-[17px] py-[13px]'
      : 'px-[17px] py-[13px]'

    return (
      <div className={fullWidth ? 'w-full' : undefined}>
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-sm text-gray-700"
          >
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && !hasError && (
            <span
              className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
              aria-hidden="true"
            >
              {leftIcon}
            </span>
          )}

          <input
            id={inputId}
            ref={ref}
            placeholder={placeholder}
            aria-invalid={hasError || undefined}
            disabled={disabled}
            className={clsx(
              base,
              padding,
              border,
              focus,
              disabledCls,
              className
            )}
            {...rest}
          />

          {rightIcon && (
            <span className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500">
              {rightIcon}
            </span>
          )}
        </div>

        {hasError && (
          <p
            id={`${inputId}-err`}
            className="text-danger-600 mt-1 text-[12px] leading-5"
          >
            {errorText ?? '올바른 형식으로 입력해주세요'}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
export default Input
