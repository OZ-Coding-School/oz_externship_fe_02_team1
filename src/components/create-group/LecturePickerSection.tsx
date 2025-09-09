import { BookmarkSquareIcon } from '@heroicons/react/24/outline'
import type { ReactNode } from 'react'

import { H2, Text } from '@components'

interface LecturePickerSectionProps {
  selectedLectures?: string[] // 선택된 강의 목록 (없으면 placeholder 표시)
  actionSlot: ReactNode
}

const LecturePickerSection = ({
  selectedLectures = [],
  actionSlot,
}: LecturePickerSectionProps) => {
  return (
    <section className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* 헤더 */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <H2>강의 선택</H2>
          <Text className="mt-1 text-gray-600" variant="small">
            스터디에서 함께 공부할 강의를 선택하세요 (최대 5개)
          </Text>
        </div>
        {actionSlot}
      </div>

      {/* 본문 */}
      {selectedLectures.length > 0 ? (
        <ul className="space-y-2">
          {selectedLectures.map((lecture, idx) => (
            <li
              key={idx}
              className="rounded-lg border border-gray-200 p-3 text-sm text-gray-800"
            >
              {lecture}
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 p-12 text-center">
          <BookmarkSquareIcon className="h-10 w-10 text-gray-400" aria-hidden />
          <Text className="mt-3 text-gray-500">
            아직 선택된 강의가 없습니다
          </Text>
          <Text className="mt-1 text-gray-400" variant="extraSmall">
            강의 추가하기 버튼을 클릭해서 강의를 선택해보세요
          </Text>
        </div>
      )}
    </section>
  )
}

export default LecturePickerSection
