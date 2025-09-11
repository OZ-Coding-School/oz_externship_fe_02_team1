import type { StudyGroup } from '@types'
import { formatDate } from '@utils'
import { Card, StudyBadge, Text } from '@components'

interface StudyGroupInfoProps extends StudyGroup {}

export default function StudyGroupInfo({
  currentMemberCount,
  maxMemberCount,
  startDate,
  lastDate,
}: StudyGroupInfoProps) {
  const formattedStartDate = formatDate(startDate ?? new Date('2024-01-01'))
  const formattedLastDate = formatDate(lastDate ?? new Date('2024-04-30'))

  const STUDY_GROUP_INFO = [
    {
      title: '인원',
      content: `${currentMemberCount ?? 8}/${maxMemberCount ?? 10}명`,
    },
    {
      title: '시작일',
      content: `${formattedStartDate}`,
    },
    {
      title: '종료일',
      content: `${formattedLastDate}`,
    },
    {
      title: '상태',
      content: <StudyBadge variant="inProgress" />,
    },
  ]

  return (
    <Card
      title="스터디 정보"
      titleVariant="base"
      className="pb-4 text-lg text-gray-900"
    >
      <div className="flex flex-col gap-3">
        {STUDY_GROUP_INFO.map((el) => (
          <div key={el.title} className="flex w-full justify-between">
            <Text className="text-gray-600">{el.title}</Text>
            <Text className="font-medium">{el.content}</Text>
          </div>
        ))}
      </div>
    </Card>
  )
}
