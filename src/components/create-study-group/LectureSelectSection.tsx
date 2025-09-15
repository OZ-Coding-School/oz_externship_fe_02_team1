import { Button, Card, SelectedLectureCard, Text } from '@components'
import { PlusIcon } from '@heroicons/react/24/outline'
import { studyGroup } from '@mocks/studyGroupDetail'

export default function LectureSelectSection() {
  return (
    <Card title="강의 선택" titleClassName="text-xl pb-0" cardClassName="p-8">
      <Button className="absolute right-8 py-2 text-base">
        <PlusIcon width={16} />
        강의 추가하기
      </Button>

      <Text className="mt-1 text-gray-600" variant="small">
        스터디에서 함께 공부할 강의를 선택하세요 (최대 5개)
      </Text>

      {studyGroup.lecture && studyGroup.lecture.length ? (
        <div className="mt-4 flex flex-col gap-4 p-3">
          {studyGroup.lecture.map((el) => (
            <SelectedLectureCard lecture={el} />
          ))}
          <Text variant="small" className="font-medium text-gray-500">
            {studyGroup.lecture.length}/5개 강의 선택됨
          </Text>
        </div>
      ) : (
        <div className="py-10 text-center">
          <Text className="mt-1 text-gray-600" variant="small">
            선택된 강의가 없습니다.
          </Text>
        </div>
      )}
    </Card>
  )
}
