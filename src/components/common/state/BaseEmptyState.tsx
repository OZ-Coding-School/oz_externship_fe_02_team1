import type { ReactNode } from 'react'

import { H4, Text } from '@components'
import { cn } from '@utils'

interface BaseEmptyStateProps {
  icon?: ReactNode
  iconBgClassName?: string
  title: string
  description: string
  action?: ReactNode
  className?: string
}

export default function BaseEmptyState({
  icon,
  iconBgClassName,
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
        className
      )}
    >
      <div className="flex flex-col items-center">
        {icon && (
          <div
            className={cn(
              'mb-6 flex h-20 w-20 items-center justify-center rounded-full',
              iconBgClassName
            )}
          >
            {icon}
          </div>
        )}
        <H4 className="text-gray-900">{title}</H4>
        <Text variant="base" className="mt-2 mb-6 block text-gray-500">
          {description}
        </Text>
        {action && <div className="flex items-center gap-3">{action}</div>}
      </div>
    </div>
  )
}
