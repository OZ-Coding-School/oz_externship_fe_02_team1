import { BookIcon } from '@assets'
import { Text } from '@components'

import type { LectureBase } from '@models'

interface StudyGroupCardLecturesProps {
  lectures: LectureBase[]
}

export default function StudyGroupCardLectures({
  lectures,
}: StudyGroupCardLecturesProps) {
  return (
    <section className="flex flex-col gap-1 pb-4">
      <div className="flex items-center gap-2">
        <BookIcon />
        <Text variant="small" className="font-medium text-gray-600">
          스터디 강의
        </Text>
      </div>
      <li className="list-none">
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
    </section>
  )
}
