import type { ReactNode } from 'react'
import { cn } from '@utils'

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
        'min-h-[360px] sm:min-h-[420px]',
        className
      )}
    >
      <div className="flex flex-col items-center gap-3 sm:gap-4">
        {icon && <div>{icon}</div>}
        <h3 className="text-xl leading-7 font-semibold text-gray-900">
          {title}
        </h3>
        {description && (
          <p className="text-base leading-normal text-gray-500">
            {description}
          </p>
        )}
        {action && <div className="mt-2 flex items-center gap-3">{action}</div>}
      </div>
    </div>
  )
}
