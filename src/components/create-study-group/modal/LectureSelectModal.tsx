import { useState } from 'react'

import {
  BaseModal,
  Checkbox,
  MODAL_PRESETS,
  Pagination,
  Text,
} from '@components'
import { lectureData } from '@mocks/datas/lectureData'

import type { LectureDetail } from '@models'

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

      <div className="overflow-y-auto p-6">
        <input
          type="text"
          placeholder="강의 제목을 검색하세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-md border border-gray-300 p-2"
        />
        <div className="mt-4 flex flex-col gap-4">
          {paginatedLectures.map((lecture) => (
            <div
              key={lecture.id}
              className="flex items-center gap-4 rounded-md border border-gray-200 p-4"
            >
              <img
                src={lecture.thumbnailImg}
                alt={lecture.lectureTitle}
                className="h-20 w-20 rounded-md object-cover"
              />
              <div className="flex-1">
                <Text className="font-semibold">{lecture.lectureTitle}</Text>
                <Text variant="small" className="text-gray-500">
                  {lecture.instructor}
                </Text>
                <Text variant="small" className="text-gray-500">
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
            </div>
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
