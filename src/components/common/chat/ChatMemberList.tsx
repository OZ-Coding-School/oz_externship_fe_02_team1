import type { StudyGroupMemberList } from '@models'
import { OnOffIcon, Text } from '@components'
import { cn } from '@utils'
import { dummyOnlineMembers } from '@mocks/chatRoomMocks'

interface ChatMemberListProps {
  members: StudyGroupMemberList[]
}

export default function ChatMemberList({ members }: ChatMemberListProps) {
  return (
    <div className="scrollbar-custom flex items-center gap-2 overflow-x-scroll overflow-y-hidden border-b border-gray-200 bg-gray-50 p-2">
      {members.map((member) => (
        <div className="flex items-center gap-1 rounded-full bg-white px-2 py-1">
          <OnOffIcon isActive={dummyOnlineMembers.includes(member.uuid)} />
          <Text
            variant="extraSmall"
            className={cn(
              'text-nowrap text-gray-700',
              member.isLeader && 'text-primary-600 font-semibold'
            )}
          >
            {member.nickname}
          </Text>
        </div>
      ))}
    </div>
  )
}
