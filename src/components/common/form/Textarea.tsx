import { useState, forwardRef, useId, type TextareaHTMLAttributes } from 'react'
import clsx from 'clsx'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  maxLength?: number // 기본 500
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  (
    { label, id, maxLength = 500, className, onChange, defaultValue, ...rest },
    ref
  ) => {
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
          className={clsx(
            'w-full rounded-[8px] border text-[14px] transition-colors outline-none',
            'resize-none px-[13px] py-[9px] placeholder:text-gray-400',
            className
          )}
          {...rest}
        />

        {/* 하단 영역: 글자수 카운터 */}
        <div className="mt-1 flex items-center justify-between">
          <div className="text-xs text-gray-500">
            {val.length}/{maxLength}
          </div>
        </div>
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
export default Textarea
