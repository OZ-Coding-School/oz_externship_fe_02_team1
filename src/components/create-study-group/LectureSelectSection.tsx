import { Button, Card, Text } from '@components'
import { PhotoIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import { studyGroup } from '@/mocks/studyGroupDetail'

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
            <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
              <div className="flex items-center gap-4">
                {el.image ? (
                  <img
                    src={el.image}
                    alt={el.title}
                    className="aspect-[5/3] w-20 object-cover"
                  />
                ) : (
                  <>
                    {/* TODO: 이미지 플레이스 홀더 공용 컴포넌트로 분리. 이미지 카드에서도 사용 */}
                    <div className="flex aspect-[5/3] h-full w-20 items-center justify-center bg-gray-200">
                      <PhotoIcon width={30} color="#9CA3AF" />
                    </div>
                  </>
                )}
                <div className="flex flex-col">
                  <Text className="font-semibold">{el.title}</Text>
                  <Text variant="small">{el.instructor}</Text>
                </div>
              </div>
              {/* TODO: 삭제 기능 추가 */}
              <TrashIcon width={16} className="text-danger-500 mr-2" />
            </div>
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
