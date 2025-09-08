import type { ReactNode } from 'react'
import { Text } from '@/components'
import { BookmarkSquareIcon } from '@heroicons/react/24/outline'
import type { PublicOption } from './types'

type Props = {
  visibility: PublicOption
  onToggleVisibility: () => void
  actionSlot: ReactNode
}

const LecturePickerSection = ({ visibility, actionSlot }: Props) => {
  return (
    <section className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-gray-900">강의 선택</h2>
          <p className="mt-1 text-sm text-gray-500">
            스터디에서 함께 공부할 강의를 선택하세요 (최대 5개)
          </p>
        </div>
        {actionSlot}
      </div>

      {visibility === 'public' ? (
        <div className="border-primary-200 bg-primary-50 text-primary-700 rounded-lg border p-4 text-sm">
          이 스터디는 공개로 설정됩니다.
        </div>
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
