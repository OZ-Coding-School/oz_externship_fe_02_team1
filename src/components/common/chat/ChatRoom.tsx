import { ArrowLeftIcon } from '@heroicons/react/24/outline'

import {
  ChatContainer,
  ChatInput,
  ChatMemberList,
  OnOffIcon,
  Text,
} from '@components'
import { dummyChatMessages, dummyOnlineMembers } from '@mocks/chatRoomMocks'
import { studyGroupMember } from '@mocks/studyGroupDetail'
import { cn, formatTimeToHHMM } from '@utils'

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
  const myUuid = studyGroupMember[0].uuid

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
      className="p-3"
      onToggle={onToggle}
    >
      <ChatMemberList members={studyGroupMember} />

      <div className="scrollbar-hidden flex h-53 flex-col gap-3 overflow-y-scroll p-3">
        {dummyChatMessages.map((message) => {
          const isMyMessage = message.sender.uuid === myUuid

          return (
            <div
              key={message.messageId}
              className={cn(
                'flex items-start',
                isMyMessage ? 'flex-row-reverse justify-end pl-10' : 'pr-10'
              )}
            >
              <div className="flex flex-col gap-1">
                {!isMyMessage && (
                  <Text variant="extraSmall" className="text-gray-600">
                    {message.sender.nickname}
                  </Text>
                )}
                <div
                  className={cn(
                    'rounded-lg px-3 py-2',
                    isMyMessage ? 'bg-primary-500' : 'bg-gray-100'
                  )}
                >
                  <Text className={cn(isMyMessage && 'text-white')}>
                    {message.content}
                  </Text>
                </div>
                <Text
                  variant="extraSmall"
                  className={cn('text-gray-500', isMyMessage && 'text-right')}
                >
                  {formatTimeToHHMM(new Date(message.createdAt))}
                </Text>
              </div>
            </div>
          )
        })}
      </div>

      <ChatInput />
    </ChatContainer>
  )
}
