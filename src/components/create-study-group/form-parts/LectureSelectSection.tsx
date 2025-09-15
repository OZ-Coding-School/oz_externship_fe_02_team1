import type { ReactNode } from 'react'

import { BookmarkSquareIcon } from '@heroicons/react/24/outline'

import { Card, SelectedLectureCard, Text } from '@components'

import type { StudyGroupLectureList } from '@models'

interface LectureSelectSectionProps {
  lectures: StudyGroupLectureList[] | undefined
  actionSlot: ReactNode
}

export default function LectureSelectSection({
  lectures,
  actionSlot,
}: LectureSelectSectionProps) {
  return (
    <Card
      title="강의 선택"
      titleClassName="text-xl pb-0"
      cardClassName="lg:p-8 gap-1"
    >
      <div className="absolute top-8 right-8">{actionSlot}</div>

      <div className="flex flex-col gap-4">
        <Text className="text-gray-600" variant="small">
          스터디에서 함께 공부할 강의를 선택하세요 (최대 5개)
        </Text>

        {lectures && lectures.length > 0 ? (
          <div className="flex flex-col gap-4 p-3">
            {lectures.map((el) => (
              <SelectedLectureCard key={el.title} lecture={el} />
            ))}
            <Text variant="small" className="font-medium text-gray-500">
              {lectures.length}/5개 강의 선택됨
            </Text>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 p-12 text-center">
            <BookmarkSquareIcon
              className="h-10 w-10 text-gray-400"
              aria-hidden
            />
            <Text className="mt-3 text-gray-500">
              아직 선택된 강의가 없습니다
            </Text>
            <Text className="mt-1 text-gray-400" variant="extraSmall">
              강의 추가하기 버튼을 클릭해서 강의를 선택해보세요
            </Text>
          </div>
        )}
      </div>
    </Card>
  )
}
