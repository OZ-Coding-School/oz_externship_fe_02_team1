import { Avatar, Badge, Card, Text } from '@components'

import type { StudyGroup } from '@models'

export default function StudyGroupMember({
  member,
}: Pick<StudyGroup, 'member'>) {
  return (
    <Card title="멤버 목록">
      <Text className="absolute top-[29px] right-[25px] text-sm text-gray-500">
        {member.length}명
      </Text>
      <div className="mt-2 flex flex-col gap-3">
        {member.map((el) => (
          <div key={el.id} className="flex items-center">
            <Avatar alt={el.name} />
            <Text className="mr-2 ml-3">{el.name}</Text>
            {el.isLeader && (
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
