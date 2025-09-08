import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import BaseEmptyState from '@components/common/state/BaseEmptyState'
import { Button } from '@components'

interface SearchEmptyStateProps {
  title?: string
  description?: string
  resetLabel?: string
  newSearchLabel?: string
  onResetFilters?: () => void
  onNewSearch?: () => void
  className?: string
}

export default function SearchEmptyState({
  title = '검색 결과가 없습니다',
  description = '다른 키워드로 검색해보시거나 필터를 조정해주세요',
  resetLabel = '필터 초기화',
  newSearchLabel = '새로운 검색',
  onResetFilters,
  onNewSearch,
  className,
}: SearchEmptyStateProps) {
  return (
    <BaseEmptyState
      className={className}
      icon={
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
          <MagnifyingGlassIcon className="h-8 w-8 text-gray-400" />
        </div>
      }
      title={title}
      description={description}
      action={
        <>
          <Button
            variant="primary"
            onClick={onResetFilters}
            className="h-10 px-4 py-2 text-base"
            aria-label={resetLabel}
          >
            {resetLabel}
          </Button>
          <Button
            variant="outline"
            onClick={onNewSearch}
            className="h-10 px-4 py-2 text-base"
            aria-label={newSearchLabel}
          >
            {newSearchLabel}
          </Button>
        </>
      }
    />
  )
}
