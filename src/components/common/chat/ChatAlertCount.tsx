import { Text } from '@components'

interface ChatAlertCountProps {
  alertCount: number
}

export default function ChatAlertCount({ alertCount }: ChatAlertCountProps) {
  return (
    <div className="bg-danger-500 absolute top-[-8px] right-[-8px] flex h-6 w-6 items-center justify-center rounded-full shadow-md">
      <Text variant="extraSmall" className="font-semibold text-white">
        {alertCount}
      </Text>
    </div>
  )
}
