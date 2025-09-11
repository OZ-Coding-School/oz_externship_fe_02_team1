import { Card, StudyBadge, Text } from '@components'
import { formatDate } from '@utils'

import type { StudyGroup } from '@types'

export default function StudyGroupInfo({
  currentMemberCount,
  maxMemberCount,
  startDate,
  lastDate,
}: Pick<
  StudyGroup,
  'currentMemberCount' | 'maxMemberCount' | 'startDate' | 'lastDate'
>) {
  const formattedStartDate = formatDate(startDate)
  const formattedLastDate = formatDate(lastDate)

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
