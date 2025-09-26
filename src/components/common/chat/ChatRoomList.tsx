import { useEffect } from 'react'

import { ChatContainer, Text, ChatListContent } from '@components'
import { useChatRoomsList } from '@hooks'

import type { ChatRoomPreview } from '@api'

interface ChatRoomListProps {
  onToggle: () => void
  onSelectChat: (chat: ChatRoomPreview) => void
  setTotalUnreadCount: (count: number) => void
}

export default function ChatRoomList({
  onToggle,
  onSelectChat,
  setTotalUnreadCount,
}: ChatRoomListProps) {
  const { data: chatRoomList, isLoading, isError, refetch } = useChatRoomsList()

  const totalUnreadCount =
    chatRoomList?.reduce(
      (sum, chat) => sum + (chat.unreadMessageCount || 0),
      0
    ) || 0

  useEffect(() => {
    if (!isError) {
      setTotalUnreadCount(totalUnreadCount)
    }
  }, [totalUnreadCount, isError, setTotalUnreadCount])

  return (
    <ChatContainer
      header={
        <div className="flex flex-col items-start">
          <Text className="font-semibold">채팅방</Text>
          <Text variant="extraSmall" className="text-primary-600">
            {isLoading || isError ? '...' : totalUnreadCount}개의 읽지 않은
            메시지
          </Text>
        </div>
      }
      onToggle={onToggle}
    >
      <ChatListContent
        isLoading={isLoading}
        isError={isError}
        chatRoomList={chatRoomList}
        onSelectChat={onSelectChat}
        onRetry={refetch}
      />
    </ChatContainer>
  )
}
