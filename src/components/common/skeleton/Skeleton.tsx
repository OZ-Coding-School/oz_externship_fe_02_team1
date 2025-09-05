import type { HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  isCircle?: boolean
}

export default function Skeleton({
  isCircle,
  className,
  ...rest
}: SkeletonProps) {
  return (
    <div
      aria-hidden
      className={cn(
        'animate-pulse bg-gray-200 dark:bg-gray-700',
        isCircle ? 'rounded-full' : 'rounded-md',
        className
      )}
      {...rest}
    />
  )
}
