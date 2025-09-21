import { cn } from '@utils'
import { ChatPreview, Text } from '@components'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { dummyChatList } from '@mocks/chatMocks'

const SCROLLBAR_STYLE =
  '[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-white'

interface ChatRoomListProps {
  totalUnreadCount: number
  onToggle: () => void
}

export default function ChatRoomList({
  totalUnreadCount,
  onToggle,
}: ChatRoomListProps) {
  return (
    <div className="fixed right-6 bottom-24 z-9999 h-96 w-80 rounded-lg border border-gray-200 bg-white shadow-2xl">
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 p-4">
        <div className="flex flex-col items-start">
          <Text className="font-semibold text-gray-900">채팅방</Text>
          <Text variant="extraSmall" className="text-primary-600">
            {totalUnreadCount}개의 읽지 않은 메시지
          </Text>
        </div>
        <XMarkIcon
          width={18}
          onClick={onToggle}
          className="cursor-pointer text-gray-400"
        />
      </div>

      <div
        className={cn(
          'h-77 overflow-x-hidden overflow-y-scroll',
          SCROLLBAR_STYLE
        )}
      >
        {dummyChatList.map((chat, index) => (
          <div
            key={chat.studyGroupUuid}
            className={cn(
              'flex flex-col gap-1 p-3',
              index !== dummyChatList.length - 1 && 'border-b border-gray-200'
            )}
          >
            <ChatPreview chat={chat} />
          </div>
        ))}
      </div>
    </div>
  )
}
