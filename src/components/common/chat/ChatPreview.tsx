import { Text, ChatAlertCount } from '@components'
import { formatDateTimeToYYYYMMDDHHMM, formatDateToMonthDay } from '@utils'

import type { ChatPreview } from '@models'

interface ChatPreviewProps {
  chat: ChatPreview
}

export default function ChatPreview({ chat }: ChatPreviewProps) {
  return (
    <>
      <div className="flex items-center justify-between">
        <Text variant="small" className="font-medium">
          {chat.studyGroupName}
        </Text>
        <div className="flex items-center gap-1">
          <Text variant="extraSmall" className="text-gray-500">
            {formatDateToMonthDay(chat.lastMessage?.createdAt || '')}
          </Text>
          {chat.unreadCount > 0 && (
            <ChatAlertCount unreadCount={chat.unreadCount} />
          )}
        </div>
      </div>
      <Text variant="extraSmall" className="text-gray-600">
        {chat.lastMessage?.senderNickname}: {chat.lastMessage?.content}
      </Text>
      <Text variant="extraSmall" className="text-gray-400">
        수정일시:
        {formatDateTimeToYYYYMMDDHHMM(chat.lastMessage?.createdAt || '')}
      </Text>
    </>
  )
}
