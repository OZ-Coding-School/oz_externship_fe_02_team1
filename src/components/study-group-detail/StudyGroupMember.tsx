import { XMarkIcon } from '@heroicons/react/24/outline'
import { useParams } from 'react-router-dom'

import { Avatar, Badge, Button, Card, Text } from '@components'
import { useKickMemberMutation } from '@hooks'

import type { StudyGroupMemberList } from '@models'

export default function StudyGroupMember({
  members,
  isLeader,
}: {
  members: StudyGroupMemberList[]
  isLeader?: boolean
}) {
  const { groupId } = useParams<{ groupId: string }>()
  const kickMemberMutation = useKickMemberMutation(groupId || '')

  const handleKickMember = (member: StudyGroupMemberList) => {
    if (
      window.confirm(`${member.nickname}님을 스터디 그룹에서 내보내시겠습니까?`)
    ) {
      kickMemberMutation.mutate(member.uuid)
    }
  }

  return (
    <Card title="멤버 목록" titleClassName="text-md sm:text-lg">
      <Text className="absolute top-7 right-6 text-sm text-gray-500">
        {members.length}명
      </Text>
      <div className="mt-2 flex flex-col gap-3">
        {members.map((member) => (
          <div
            key={member.uuid}
            className="group flex items-center justify-between"
          >
            <div className="flex items-center">
              <Avatar alt={member.nickname} />
              <Text className="mr-2 ml-3">{member.nickname}</Text>
              {member.isLeader && (
                <Badge
                  color="primary"
                  size="md"
                  className="rounded-sm !px-2 text-xs"
                >
                  리더
                </Badge>
              )}
            </div>
            {isLeader && !member.isLeader && (
              <div className="group/tooltip relative hidden group-hover:block">
                <Button
                  variant="ghost"
                  className="rounded-full bg-red-50 p-1 hover:bg-red-100"
                  aria-label={`${member.nickname}님을 추방`}
                  onClick={() => handleKickMember(member)}
                >
                  <XMarkIcon width={20} className="text-danger-500" />
                </Button>
                <div
                  className="invisible absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-sm bg-gray-200 px-2 py-1 text-xs whitespace-nowrap opacity-0 shadow-sm transition-opacity group-hover/tooltip:visible group-hover/tooltip:opacity-100"
                  role="tooltip"
                >
                  {member.nickname}님을 추방
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  )
}
