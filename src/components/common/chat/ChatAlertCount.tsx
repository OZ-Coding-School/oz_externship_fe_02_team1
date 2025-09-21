import { cn } from '@utils'
import { Text } from '@components'

interface ChatAlertCountProps {
  unreadCount: number
  isTotalCount?: boolean
}

export default function ChatAlertCount({
  unreadCount,
  isTotalCount = false,
}: ChatAlertCountProps) {
  return (
    <div
      className={cn(
        'bg-danger-500 flex items-center justify-center rounded-full text-white',
        isTotalCount
          ? 'absolute top-[-8px] right-[-8px] h-6 w-6 shadow-md'
          : 'h-5 w-5'
      )}
    >
      <Text variant="extraSmall" className="font-semibold">
        {unreadCount}
      </Text>
    </div>
  )
}
