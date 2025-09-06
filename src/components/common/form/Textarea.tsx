import type { TextareaHTMLAttributes, Ref } from 'react'

import { useState, useId } from 'react'

import { textareaStyle } from '@components/common/form/form.styles'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  maxLength?: number // 기본 500
  ref?: Ref<HTMLTextAreaElement>
}

const Textarea = ({
  label,
  id,
  maxLength = 500,
  className,
  onChange,
  defaultValue,
  ref,
  ...rest
}: TextareaProps) => {
  const autoId = useId()
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
    </div>
  )
}

export default Textarea
