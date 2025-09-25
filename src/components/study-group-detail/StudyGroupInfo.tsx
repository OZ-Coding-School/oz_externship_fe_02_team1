import { Card, StudyBadge, Text } from '@components'
import { formatDate } from '@utils'

import type { StudyGroupDetail } from '@models'

export default function StudyGroupInfo({
  currentHeadcount,
  maxHeadcount,
  startAt,
  endAt,
  status,
}: Pick<
  StudyGroupDetail,
  'currentHeadcount' | 'maxHeadcount' | 'startAt' | 'endAt' | 'status'
>) {
  const formattedStartDate = formatDate(new Date(startAt))
  const formattedLastDate = formatDate(new Date(endAt))

  const STUDY_GROUP_INFO = [
    {
      title: '인원',
      content: `${currentHeadcount}/${maxHeadcount}명`,
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
      content: <StudyBadge variant={status} />,
    },
  ]

  return (
    <Card
      title="스터디 정보"
      titleVariant="base"
      titleClassName="pb-4 text-lg text-gray-900"
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
