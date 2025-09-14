import {
  useId,
  type ComponentPropsWithoutRef,
  type ReactNode,
  type Ref,
} from 'react'

import { inputStyle } from '@components/common/form/form.styles'

interface InputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
  label?: string
  isRequired?: boolean
  errorText?: string
  fullWidth?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  ref?: Ref<HTMLInputElement>
}

const Input = ({
  id,
  label,
  isRequired,
  errorText,
  disabled,
  placeholder,
  className,
  fullWidth = true,
  leftIcon,
  rightIcon,
  ref,
  ...rest
}: InputProps) => {
  const autoId = useId()
  const inputId = id ?? autoId
  const hasError = !!errorText

  return (
    <div className={fullWidth ? 'w-full' : undefined}>
      {label && (
        <label htmlFor={inputId} className="mb-1.5 block text-sm text-gray-700">
          {label}
          {isRequired && <span className="text-danger-500">&nbsp;*</span>}
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
          className={inputStyle({
            hasError,
            leftIcon: !!leftIcon,
            className,
          })}
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

export default Input
