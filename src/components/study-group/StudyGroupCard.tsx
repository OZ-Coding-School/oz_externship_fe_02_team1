import { Card, ImageCard, Text } from '@components'

import { BookIcon, CalendarIcon } from '@/assets'
import { studyGroup } from '@/mocks/studyGroupDetail'
import { formatToYMD } from '@/utils'

export default function StudyGroupCard({ title }: any) {
  const { lectures, startAt, endAt } = studyGroup

  const startDate = formatToYMD(new Date(startAt))
  const endDate = formatToYMD(new Date(endAt))

  return (
    <div className="max-w-96">
      <ImageCard title={title} />
      <Card title={title} cardClassName="flex flex-col gap-3 p-5">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <CalendarIcon />
            <Text variant="small" className="font-medium text-gray-600">
              스터디 기간
            </Text>
          </div>
          <Text variant="small" className="pl-6 font-normal text-gray-700">
            {startDate} ~ {endDate}
          </Text>
        </div>
        <li className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <BookIcon />
            <Text variant="small" className="font-medium text-gray-600">
              스터디 강의
            </Text>
          </div>
          {lectures.map((lecture) => (
            <ul key={lecture.id} className="flex flex-col pt-2 pl-5">
              <Text variant="small" className="font-medium text-gray-600">
                {lecture.title}
              </Text>
              <Text variant="extraSmall" className="font-normal text-gray-500">
                {lecture.instructor}
              </Text>
            </ul>
          ))}
        </li>
      </Card>
    </div>
  )
}
