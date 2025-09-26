import { ChatContainer, ChatPreview, LoadingState, Text } from '@components'
import { cn } from '@utils'

import type { ChatRoomPreview, ChatRoomsResponse } from '@api'

interface ChatRoomListProps {
  totalUnreadCount: number | undefined
  isLoading: boolean
  chatRoomList: ChatRoomsResponse | undefined
  onToggle: () => void
  onSelectChat: (chat: ChatRoomPreview) => void
}

export default function ChatRoomList({
  totalUnreadCount,
  isLoading,
  chatRoomList,
  onToggle,
  onSelectChat,
}: ChatRoomListProps) {
  if (isLoading) {
    return <LoadingState />
  }

  return (
    <ChatContainer
      header={
        <div className="flex flex-col items-start">
          <Text className="font-semibold">채팅방</Text>
          <Text variant="extraSmall" className="text-primary-600">
            {totalUnreadCount}개의 읽지 않은 메시지
          </Text>
        </div>
      }
      onToggle={onToggle}
    >
      <div className="scrollbar-hidden h-77 overflow-x-hidden overflow-y-scroll">
        {chatRoomList && chatRoomList.length > 0 ? (
          chatRoomList.map((chat, index) => (
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
          ))
        ) : (
          <div className="flex h-full items-center justify-center">
            <Text className="text-gray-500">채팅방이 없습니다.</Text>
          </div>
        )}
      </div>
    </ChatContainer>
  )
}
