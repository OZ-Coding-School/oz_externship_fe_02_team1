import { ChatPreview, ErrorState, LoadingState, Text } from '@components'
import { cn } from '@utils'

import type { ChatRoomPreview, ChatRoomsResponse } from '@api'

interface ChatListContentProps {
  isLoading: boolean
  isError: boolean
  chatRoomList: ChatRoomsResponse | undefined
  onSelectChat: (chat: ChatRoomPreview) => void
  onRetry: () => void
}

export default function ChatListContent({
  isLoading,
  isError,
  chatRoomList,
  onSelectChat,
  onRetry,
}: ChatListContentProps) {
  if (isLoading) return <LoadingState />

  if (isError) {
    return (
      <div className="flex h-77 items-center justify-center">
        <ErrorState onRetry={onRetry} />
      </div>
    )
  }

  if (!chatRoomList || chatRoomList.length === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <Text className="text-gray-500">채팅방이 없습니다.</Text>
      </div>
    )
  }

  return (
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
  )
}
