import { PlusIcon } from '@heroicons/react/24/outline'
import { useMediaQuery } from 'react-responsive'

import { Button, Card, SelectedLectureCard, Text } from '@components'
import { mediaQuery } from '@constants'
import { studyGroup } from '@mocks/studyGroupDetail'
import { cn } from '@utils'

export default function LectureSelectSection() {
  const isMobile = useMediaQuery({ query: mediaQuery.mobile })

  return (
    <Card
      title="강의 선택"
      titleClassName="text-xl pb-0"
      cardClassName="lg:p-8 gap-1"
    >
      <Button
        size={isMobile ? 'small' : 'medium'}
        className={cn(
          'absolute',
          isMobile ? 'right-6' : 'right-8 py-2 text-base'
        )}
      >
        <PlusIcon width={16} />
        강의 추가하기
      </Button>

      <div className="flex flex-col gap-4">
        <Text className="text-gray-600" variant="small">
          스터디에서 함께 공부할 강의를 선택하세요 (최대 5개)
        </Text>

        {studyGroup.lecture && studyGroup.lecture.length ? (
          <div className="flex flex-col gap-4 p-3">
            {studyGroup.lecture.map((el) => (
              <SelectedLectureCard key={el.title} lecture={el} />
            ))}
            <Text variant="small" className="font-medium text-gray-500">
              {studyGroup.lecture.length}/5개 강의 선택됨
            </Text>
          </div>
        ) : (
          <div className="py-10 text-center">
            <Text className="text-gray-600" variant="small">
              선택된 강의가 없습니다.
            </Text>
          </div>
        )}
      </div>
    </Card>
  )
}
