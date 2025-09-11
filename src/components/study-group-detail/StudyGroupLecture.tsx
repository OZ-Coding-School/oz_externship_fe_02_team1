import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

import { Card, ImageCard, Text } from '@components'

import type { StudyGroup } from '@models'

export default function StudyGroupLecture({
  lecture,
}: Pick<StudyGroup, 'lecture'>) {
  return (
    <Card
      title="스터디 강의"
      titleVariant="base"
      className="pb-4 text-lg text-gray-900"
    >
      <div className="flex flex-col gap-4">
        {lecture?.map((el) => (
          <ImageCard
            key={el.title}
            title={el.title}
            imageUrl=""
            className="p-4"
          >
            <Text className="font-medium text-gray-900">{el.title}</Text>
            <Text className="mt-1 mb-3 text-sm">{el.instructor}</Text>
            <Text className="text-primary-600 flex cursor-pointer gap-1 text-sm hover:underline">
              강의 바로가기 <ArrowUpRightIcon width={14} />
            </Text>
          </ImageCard>
        ))}
      </div>
    </Card>
  )
}
