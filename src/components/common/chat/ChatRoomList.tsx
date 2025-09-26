import { useEffect } from 'react'

import { ChatContainer, ChatPreview, LoadingState, Text } from '@components'
import { useChatRoomsList } from '@hooks'
import { cn } from '@utils'

import type { ChatRoomPreview } from '@api'
import { ErrorState } from '../state/ErrorState'

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
      {isLoading ? (
        <LoadingState />
      ) : isError ? (
        <div className="h-77">
          <ErrorState onRetry={refetch} />
        </div>
      ) : chatRoomList && chatRoomList.length > 0 ? (
        <div className="scrollbar-hidden h-77 overflow-x-hidden overflow-y-scroll">
          {chatRoomList.map((chat, index) => (
            <div
              key={chat.uuid}
              onClick={() => onSelectChat(chat)}
              className={cn(
                'flex cursor-pointer flex-col gap-1 p-3',
                index !== chatRoomList.length - 1 && 'border-b border-gray-200'
              )}
            >
              <ChatPreview chat={chat} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex h-full items-center justify-center">
          <Text className="text-gray-500">채팅방이 없습니다.</Text>
        </div>
      )}
    </ChatContainer>
  )
}
