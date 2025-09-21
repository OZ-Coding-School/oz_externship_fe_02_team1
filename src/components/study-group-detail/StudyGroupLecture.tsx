import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router'

import { Card, ImageCard, Text } from '@components'

import type { Lecture } from '@models'

export default function StudyGroupLecture({
  lectures,
}: {
  lectures: Lecture[]
}) {
  return (
    <Card
      title="스터디 강의"
      titleVariant="base"
      titleClassName="pb-4 text-lg text-gray-900"
    >
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:flex">
        {lectures?.map((lecture) => (
          <ImageCard
            key={lecture.id}
            title={lecture.title}
            imageUrl={lecture.thumbnailImg}
            className="p-4"
          >
            <Text className="font-medium">{lecture.title}</Text>
            <Text className="mt-1 mb-3 text-sm">{lecture.instructor}</Text>
            <Link
              to={lecture.urlLink}
              className="text-primary-600 flex cursor-pointer gap-1 text-sm hover:underline"
            >
              강의 바로가기 <ArrowUpRightIcon width={14} />
            </Link>
          </ImageCard>
        ))}
      </div>
    </Card>
  )
}
