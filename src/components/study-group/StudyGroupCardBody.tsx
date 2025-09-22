import { Text } from '@components'
import { formatToYMD } from '@utils'

import { BookIcon, CalendarIcon } from '@/assets'

import type { LectureBase } from '@models'


interface StudyGroupCardBodyProps {
  startAt: string
  endAt: string
  lectures: LectureBase[]
}

export default function StudyGroupCardBody({
  startAt,
  endAt,
  lectures,
}: StudyGroupCardBodyProps) {
  const startDate = formatToYMD(new Date(startAt))
  const endDate = formatToYMD(new Date(endAt))

  return (
    <div className="flex flex-col gap-4">
      <section className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <CalendarIcon />
          <Text variant="small" className="font-medium text-gray-600">
            스터디 기간
          </Text>
        </div>
        <Text variant="small" className="pl-6 font-normal text-gray-700">
          {startDate} ~ {endDate}
        </Text>
      </section>

      <section className="flex flex-col gap-1 pb-4">
        <div className="flex items-center gap-2">
          <BookIcon />
          <Text variant="small" className="font-medium text-gray-600">
            스터디 강의({lectures.length})
          </Text>
        </div>
        <ul>
          {lectures.map((lecture) => (
            <li key={lecture.id} className="flex flex-col pt-2 pl-5">
              <Text variant="small" className="font-medium text-gray-600">
                {lecture.title}
              </Text>
              <Text variant="extraSmall" className="font-normal text-gray-500">
                {lecture.instructor}
              </Text>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
