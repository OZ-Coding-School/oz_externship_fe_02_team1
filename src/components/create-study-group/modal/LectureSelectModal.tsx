import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

import {
  BaseModal,
  MODAL_PRESETS,
  Pagination,
  LectureSelectItem,
  Input,
} from '@components'
import { MAX_LECTURES } from '@constants'
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
    setSelectedLectures((prev) => {
      const isAlreadySelected = prev.some((l) => l.id === lecture.id)

      if (isAlreadySelected) {
        return prev.filter((l) => l.id !== lecture.id)
      } else {
        if (prev.length >= MAX_LECTURES) {
          return prev
        }
        return [...prev, lecture]
      }
    })
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
            <LectureSelectItem
              key={lecture.id}
              lecture={lecture}
              isSelected={selectedLectures.some((l) => l.id === lecture.id)}
              onSelect={handleSelectLecture}
              disabled={selectedLectures.length > MAX_LECTURES}
            />
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
