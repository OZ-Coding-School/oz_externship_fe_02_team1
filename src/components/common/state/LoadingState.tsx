import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { cn } from '@utils'

interface LoadingStateProps {
  message?: string
  subMessage?: string
  className?: string
}

export default function LoadingState({
  message = '데이터를 불러오고 있습니다',
  subMessage = '잠시만 기다려주세요…',
  className,
}: LoadingStateProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-6 py-14 text-center',
        'min-h-[220px]',
        className
      )}
    >
      <ArrowPathIcon className="h-10 w-10 animate-spin text-gray-300" />
      <p className="mt-4 text-base font-medium text-gray-900">{message}</p>
      {subMessage && (
        <p className="mt-1 text-sm leading-6 text-gray-500">{subMessage}</p>
      )}
    </div>
  )
}
