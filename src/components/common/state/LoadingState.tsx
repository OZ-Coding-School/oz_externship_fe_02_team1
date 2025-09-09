import { H4, Text } from '@components'
import { cn } from '@utils'

interface LoadingStateProps {
  title: string
  description: string
  className?: string
}

export default function LoadingState({
  title = '데이터를 불러오고 있습니다',
  description = '잠시만 기다려주세요…',
  className,
}: LoadingStateProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'flex flex-col items-center justify-center text-center',
        'px-6 py-12',
        'min-h-[240px] sm:min-h-[280px]',
        className
      )}
    >
      <div className="border-primary-500 h-12 w-12 animate-spin rounded-full border-2 border-b-2 border-b-transparent [animation-duration:1.5s]" />
      <H4 className="mt-8 text-gray-900">{title}</H4>
      <Text variant="base" className="mt-2 text-gray-500">
        {description}
      </Text>
    </div>
  )
}
