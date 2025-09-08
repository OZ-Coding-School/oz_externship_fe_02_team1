import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import BaseEmptyState from './BaseEmptyState'
import { Button } from '@components/common/button'

interface SearchEmptyStateProps {
  title?: string
  description?: string
  resetLabel?: string
  newSearchLabel?: string
  onResetFilters?: () => void
  onNewSearch?: () => void
}

export default function SearchEmptyState({
  title = '검색 결과가 없습니다',
  description = '다른 키워드로 검색해보시거나 필터를 조정해주세요.',
  resetLabel = '필터 초기화',
  newSearchLabel = '새로운 검색',
  onResetFilters,
  onNewSearch,
}: SearchEmptyStateProps) {
  const handleReset = () => {
    onResetFilters?.()
  }
  const handleNewSearch = () => {
    onNewSearch?.()
  }

  return (
    <BaseEmptyState
      icon={<MagnifyingGlassIcon className="h-12 w-12 text-gray-300" />}
      title={title}
      description={description}
      action={
        <>
          <Button variant="primary" onClick={handleReset}>
            {resetLabel}
          </Button>
          <Button variant="secondary" onClick={handleNewSearch}>
            {newSearchLabel}
          </Button>
        </>
      }
    />
  )
}
