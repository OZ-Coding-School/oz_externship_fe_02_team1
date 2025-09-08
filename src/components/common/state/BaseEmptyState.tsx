import type { ReactNode } from 'react'
import { cn } from '@utils'
import { H4, Text } from '@components/common/text'

interface BaseEmptyStateProps {
  icon?: ReactNode
  title: string
  description?: string
  action?: ReactNode
  className?: string
}

export default function BaseEmptyState({
  icon,
  title,
  description,
  action,
  className,
}: BaseEmptyStateProps) {
  return (
    <div
      aria-live="polite"
      className={cn(
        'flex w-full flex-col items-center justify-center text-center',
        'rounded-xl border border-gray-200 bg-gray-50 px-6 py-12',
        'max-w-md sm:max-w-xl',
        'min-h-[320px] sm:min-h-[380px]',
        className
      )}
    >
      <div className="flex flex-col items-center">
        {icon && <div className="mb-6">{icon}</div>}

        <H4 className="text-gray-900">{title}</H4>

        {description && (
          <Text variant="base" className="mt-2 mb-6 block text-gray-500">
            {description}
          </Text>
        )}

        {action && <div className="flex items-center gap-3">{action}</div>}
      </div>
    </div>
  )
}
