import { ChatContainer, ChatPreview, Text } from '@components'
import { dummyChatList } from '@mocks/chatListMocks'
import type { ChatPreview as ChatPreviewType } from '@models'
import { cn } from '@utils'

const SCROLLBAR_STYLE =
  '[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-white'

interface ChatRoomListProps {
  totalUnreadCount: number
  onToggle: () => void
  onSelectChat: (chat: ChatPreviewType) => void
}

export default function ChatRoomList({
  totalUnreadCount,
  onToggle,
  onSelectChat,
}: ChatRoomListProps) {
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
      <div
        className={cn(
          'h-77 overflow-x-hidden overflow-y-scroll',
          SCROLLBAR_STYLE
        )}
      >
        {dummyChatList.length > 0 ? (
          dummyChatList.map((chat, index) => (
            <div
              key={chat.studyGroupUuid}
              onClick={() => onSelectChat(chat)}
              className={cn(
                'flex cursor-pointer flex-col gap-1 p-3',
                index !== dummyChatList.length - 1 && 'border-b border-gray-200'
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
