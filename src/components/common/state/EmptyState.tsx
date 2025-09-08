import { InboxIcon } from '@heroicons/react/24/outline'
import BaseEmptyState from '@components/common/state/BaseEmptyState'
import { Button } from '@components/common/button'

type EmptyLayout = 'page' | 'card'

interface EmptyStateProps {
  title?: string
  description?: string
  primaryLabel?: string
  onPrimaryClick?: () => void
  iconSize?: number
  layout?: EmptyLayout
}

export default function EmptyState({
  title = '아직 데이터가 없습니다',
  description = '첫 번째 항목을 추가해보세요.',
  primaryLabel = '새로 만들기',
  onPrimaryClick,
  iconSize = 48,
  layout = 'page',
}: EmptyStateProps) {
  const containerClass =
    layout === 'page'
      ? 'min-h-[260px] rounded-xl border border-gray-200 bg-gray-50 px-6 py-14'
      : 'min-h-[180px] rounded-lg bg-gray-50 px-4 py-10'

  return (
    <BaseEmptyState
      className={containerClass}
      icon={
        <InboxIcon
          className="text-gray-300"
          style={{ width: iconSize, height: iconSize }}
        />
      }
      title={title}
      description={description}
      action={
        <Button
          variant="primary"
          onClick={onPrimaryClick}
          aria-label={primaryLabel}
        >
          {primaryLabel}
        </Button>
      }
    />
  )
}
