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
        'flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-6 py-14 text-center',
        'min-h-[260px]',
        className
      )}
    >
      {icon && <div className="mb-5">{icon}</div>}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      {description && (
        <p className="mt-2 text-sm leading-6 text-gray-500">{description}</p>
      )}
      {action && <div className="mt-6 flex items-center gap-2">{action}</div>}
    </div>
  )
}
