import { useState } from 'react'

import {
  BaseModal,
  Checkbox,
  Input,
  MODAL_PRESETS,
  Pagination,
  Text,
} from '@components'
import { lectureData } from '@mocks/datas/lectureData'

import type { LectureDetail } from '@models'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { cn } from '@/utils'

interface LectureSelectModalProps {
  isOpen: boolean
  onClose: () => void
}
const LECTURES_PER_PAGE = 5
export default function LectureSelectModal({
  isOpen,
  onClose,
}: LectureSelectModalProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedLectures, setSelectedLectures] = useState<LectureDetail[]>([])

  const filteredLectures = lectureData.filter((lecture) =>
    lecture.lectureTitle.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalPages = Math.ceil(filteredLectures.length / LECTURES_PER_PAGE)
  const paginatedLectures = filteredLectures.slice(
    (currentPage - 1) * LECTURES_PER_PAGE,
    currentPage * LECTURES_PER_PAGE
  )

  const handleSelectLecture = (lecture: LectureDetail) => {
    setSelectedLectures((prev) =>
      prev.some((l) => l.id === lecture.id)
        ? prev.filter((l) => l.id !== lecture.id)
        : [...prev, lecture]
    )
  }

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} size="lg">
      {MODAL_PRESETS.search.header({ onClose })}

      <div className="scrollbar-custom overflow-y-auto p-6">
        <Input
          type="text"
          placeholder="강의명이나 강사명으로 검색..."
          leftIcon={<MagnifyingGlassIcon width={16} />}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="mt-4 flex flex-col gap-4">
          {paginatedLectures.map((lecture) => (
            <label
              key={lecture.id}
              className={cn(
                'flex cursor-pointer items-center gap-4 rounded-md border-2 p-4',
                selectedLectures.some((l) => l.id === lecture.id)
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200'
              )}
            >
              <img
                src={lecture.thumbnailImg}
                alt={lecture.lectureTitle}
                className="h-16 w-24 rounded-lg object-cover"
              />
              <div className="flex flex-1 flex-col items-start gap-1">
                <Text className="font-medium">{lecture.lectureTitle}</Text>
                <Text variant="small" className="text-gray-600">
                  {lecture.instructor}
                </Text>
                <Text
                  variant="extraSmall"
                  className={cn(
                    'rounded-sm px-2 py-1 font-medium',
                    lecture.platform == 'inflearn'
                      ? 'bg-success-100 text-success-800'
                      : 'bg-[#F3E8FF] text-[#6B21A8]'
                  )}
                >
                  {lecture.platform}
                </Text>
              </div>
              <div className="flex flex-col items-end">
                <Text className="text-lg font-semibold">
                  {lecture.discountPrice.toLocaleString()}원
                </Text>
                <Text variant="small" className="text-gray-400 line-through">
                  {lecture.originalPrice.toLocaleString()}원
                </Text>
              </div>
              <Checkbox
                checked={selectedLectures.some((l) => l.id === lecture.id)}
                onChange={() => handleSelectLecture(lecture)}
              />
            </label>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>

      {MODAL_PRESETS.search.footer({
        onClose,
        onConfirm: () => {},
        selectedCount: selectedLectures.length,
      })}
    </BaseModal>
  )
}
