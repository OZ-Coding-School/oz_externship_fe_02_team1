import { cn } from '@utils'

/** Input 전용 스타일 */
export const inputStyle = ({
  hasError,
  leftIcon,
  className,
}: {
  hasError: boolean
  leftIcon?: boolean
  className?: string
}) =>
  cn(
    'w-full rounded-[8px] border bg-white text-[14px] outline-none transition-colors',
    leftIcon ? 'pl-[41px] pr-[17px] py-[13px]' : 'px-[17px] py-[13px]',
    {
      'border-danger-100 focus:border-danger-100': hasError,
      'border-gray-300 focus:border-2 focus:border-primary-500': !hasError,
    },
    'disabled:bg-gray-50 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-400 disabled:cursor-not-allowed',
    className
  )

/** DateInput 전용 스타일 */
export const dateInputStyle = ({
  invalid,
  className,
}: {
  invalid?: boolean
  className?: string
}) =>
  cn(
    'w-full rounded-[8px] border text-xs sm:text-md  transition-colors outline-none',
    'px-[17px] py-[13px] pr-10',
    invalid
      ? 'border-danger-100 focus:border-danger-100'
      : 'border-gray-300 focus:border-2 focus:border-primary-500',
    className
  )

/** Textarea 전용 스타일 */
export const textareaStyle = (className?: string) =>
  cn(
    'w-full rounded-[8px] border border-gray-300 text-[14px] transition-colors outline-none',
    'resize-none px-[13px] py-[9px] placeholder:text-gray-400 focus:border-2 focus:border-primary-500',
    className
  )

/** TimeInput 전용 스타일 */
export const timeInputButtonStyle = (className?: string) =>
  cn(
    'w-full rounded-[8px] border bg-white text-left text-[14px] transition-colors outline-none',
    'focus:border-primary-500 border-gray-300 focus:border-2',
    'px-[17px] py-[13px]',
    className
  )
