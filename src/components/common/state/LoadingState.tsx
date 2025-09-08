import { cn } from '@utils'
import { H4, Text } from '@components/common/text'

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
        'flex flex-col items-center justify-center text-center',
        'rounded-xl border border-gray-200 bg-gray-50 px-6 py-12',
        'min-h-[280px] sm:min-h-[320px]',
        className
      )}
    >
      <div className="border-primary-500 h-12 w-12 animate-spin rounded-full border-2 border-b-2 border-b-transparent [animation-duration:1.5s]" />
      <H4 className="mt-8 text-gray-900">{message}</H4>
      {subMessage && (
        <Text variant="base" className="mt-2 text-gray-500">
          {subMessage}
        </Text>
      )}
    </div>
  )
}
