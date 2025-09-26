import { Text, ChatAlertCount } from '@components'
import { formatDateTimeToYYYYMMDDHHMM, formatDateToMonthDay } from '@utils'

import type { ChatRoomPreview } from '@api'

interface ChatPreviewProps {
  chat: ChatRoomPreview
}

export default function ChatPreview({ chat }: ChatPreviewProps) {
  return (
    <>
      <div className="flex items-center justify-between">
        <Text variant="small" className="font-medium">
          {chat.name}
        </Text>
        <div className="flex items-center gap-1">
          <Text variant="extraSmall" className="text-gray-500">
            {formatDateToMonthDay(chat.lastMessage?.createdAt || '')}
          </Text>
          {chat.unreadMessageCount > 0 && (
            <ChatAlertCount unreadCount={chat.unreadMessageCount} />
          )}
        </div>
      </div>

      {chat.lastMessage ? (
        <>
          <Text variant="extraSmall" className="text-gray-600">
            {chat.lastMessage?.sender.nickname}: {chat.lastMessage?.content}
          </Text>
          <Text variant="extraSmall" className="text-gray-400">
            수정일시:
            {formatDateTimeToYYYYMMDDHHMM(chat.lastMessage?.createdAt || '')}
          </Text>
        </>
      ) : (
        <div>
          <Text variant="extraSmall" className="text-gray-500">
            대화 내역이 없습니다
          </Text>
        </div>
      )}
    </>
  )
}
