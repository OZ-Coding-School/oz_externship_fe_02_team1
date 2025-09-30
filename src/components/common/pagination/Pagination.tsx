import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

import { cn } from '@utils'

import { Text } from '../text'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={cn('rounded-md p-2', {
          'cursor-not-allowed text-gray-300': currentPage === 1,
          'text-gray-500 hover:bg-gray-100': currentPage !== 1,
        })}
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      <Text className="text-sm text-gray-700">
        {currentPage} / {totalPages}
      </Text>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={cn('rounded-md p-2', {
          'cursor-not-allowed text-gray-300': currentPage === totalPages,
          'text-gray-500 hover:bg-gray-100': currentPage !== totalPages,
        })}
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  )
}
