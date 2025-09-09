import { InboxIcon, PlusIcon } from '@heroicons/react/24/outline'

import { BaseEmptyState, Button } from '@components'

interface EmptyStateProps {
  title: string
  description: string
  createLabel?: string
  onCreate?: () => void
  className?: string
}

export default function EmptyState({
  title = '아직 데이터가 없습니다',
  description = '첫 번째 항목을 추가해보세요',
  createLabel = '새로 만들기',
  onCreate,
  className,
}: EmptyStateProps) {
  return (
    <BaseEmptyState
      className={className}
      icon={
        <InboxIcon
          className="text-primary-500 h-8 w-8"
          strokeWidth={2}
          aria-hidden
        />
      }
      iconBgClassName="bg-primary-50"
      title={title}
      description={description}
      action={
        <Button
          variant="primary"
          onClick={onCreate}
          aria-label={createLabel}
          className="inline-flex h-12 items-center gap-3 rounded-xl px-6 py-3 text-base"
        >
          <PlusIcon className="h-6 w-6" aria-hidden />
          {createLabel}
        </Button>
      }
    />
  )
}
