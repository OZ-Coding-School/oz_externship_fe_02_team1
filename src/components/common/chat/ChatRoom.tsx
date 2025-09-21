import { Avatar, ChatContainer, OnOffIcon, Text } from '@components'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { dummyChatMessages, dummyOnlineMembers } from '@mocks/chatRoomMocks'
import { cn } from '@utils'

const SCROLLBAR_STYLE =
  '[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-white'

interface ChatRoomProps {
  studyGroupName: string
  onToggle: () => void
  onBack: () => void
}

export default function ChatRoom({
  studyGroupName,
  onToggle,
  onBack,
}: ChatRoomProps) {
  return (
    <ChatContainer
      header={
        <div className="flex items-center gap-2">
          <ArrowLeftIcon
            width={32}
            onClick={onBack}
            className="cursor-pointer p-2 text-gray-600"
          />
          <div>
            <Text variant="small" className="font-semibold">
              {studyGroupName}
            </Text>
            <div className="flex items-center gap-1">
              <OnOffIcon isActive />
              <Text variant="extraSmall" className="text-gray-600">
                {dummyOnlineMembers.length}명 온라인
              </Text>
            </div>
          </div>
        </div>
      }
      onToggle={onToggle}
    >
      <div className={cn('h-77 overflow-y-scroll', SCROLLBAR_STYLE)}>
        {dummyChatMessages.map((message) => (
          <div key={message.messageId} className="flex items-start gap-2 p-3">
            <Avatar
              src={message.sender.profileImage}
              alt={`${message.sender.nickname}'s profile`}
            />
            <div className="flex flex-col">
              <Text variant="small" className="font-medium">
                {message.sender.nickname}
              </Text>
              <div className="rounded-lg bg-gray-100 p-2">
                <Text>{message.content}</Text>
              </div>
              <Text variant="extraSmall" className="text-gray-500">
                {new Date(message.createdAt).toLocaleTimeString()}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </ChatContainer>
  )
}
