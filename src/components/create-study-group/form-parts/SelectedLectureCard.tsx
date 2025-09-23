import { PhotoIcon, TrashIcon } from '@heroicons/react/24/outline'

import { Text } from '@components'

import type { Lecture } from '@models'

interface SelectedLectureCardProps {
  lecture: Lecture
}

export default function SelectedLectureCard({
  lecture,
}: SelectedLectureCardProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
      <div className="flex items-center gap-4">
        {lecture.thumbnailImg ? (
          <img
            src={lecture.thumbnailImg}
            alt={lecture.lectureTitle}
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
          <Text className="font-semibold">{lecture.lectureTitle}</Text>
          <Text variant="small">{lecture.instructor}</Text>
        </div>
      </div>

      {/* TODO: 삭제 기능 추가 */}
      <button type="button" className="mr-2 cursor-pointer p-1">
        <TrashIcon width={16} className="text-danger-500" />
      </button>
    </div>
  )
}
