import { useState, useId, type TextareaHTMLAttributes, type Ref } from 'react'

import { textareaStyle } from '@components/common/form/form.styles'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  errorText?: string
  isRequired?: boolean
  maxLength?: number // 기본 500
  ref?: Ref<HTMLTextAreaElement>
}

const Textarea = ({
  label,
  errorText,
  isRequired,
  id,
  maxLength = 500,
  className,
  onChange,
  defaultValue,
  ref,
  ...rest
}: TextareaProps) => {
  const autoId = useId()
  const hasError = !!errorText
  const textareaId = id ?? autoId
  const [val, setVal] = useState(
    typeof defaultValue === 'string' ? defaultValue : ''
  )

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setVal(e.target.value)
    onChange?.(e)
  }

  return (
    <div>
      {label && (
        <label
          htmlFor={textareaId}
          className="mb-1.5 block text-sm text-gray-700"
        >
          {label}
          {isRequired && <span className="text-danger-500">&nbsp;*</span>}
        </label>
      )}

      <textarea
        id={textareaId}
        ref={ref}
        value={val}
        onChange={handleChange}
        maxLength={maxLength}
        className={textareaStyle(className)}
        {...rest}
      />

      <div className="mt-1 flex items-center justify-between">
        <div className="text-xs text-gray-500">
          {val.length}/{maxLength}
        </div>
      </div>

      {hasError && (
        <p
          id={`${textareaId}-err`}
          className="text-danger-600 mt-1 text-[12px] leading-5"
        >
          {errorText ?? '올바른 형식으로 입력해주세요'}
        </p>
      )}
    </div>
  )
}

export default Textarea
