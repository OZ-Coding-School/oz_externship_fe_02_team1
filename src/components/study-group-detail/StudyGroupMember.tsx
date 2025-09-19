import { Avatar, Badge, Card, Text } from '@components'

import type { StudyGroupMemberList } from '@models'

export default function StudyGroupMember({
  members,
}: {
  members: StudyGroupMemberList[]
}) {
  return (
    <Card title="멤버 목록">
      <Text className="absolute top-7 right-6 text-sm text-gray-500">
        {members.length}명
      </Text>
      <div className="mt-2 flex flex-col gap-3">
        {members.map((member) => (
          <div key={member.uuid} className="flex items-center">
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
        ))}
      </div>
    </Card>
  )
}
