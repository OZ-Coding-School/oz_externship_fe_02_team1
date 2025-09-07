import type { HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {}

const Skeleton = ({ className, ...restProps }: SkeletonProps) => {
  return (
    <div
      aria-hidden
      className={cn(
        'animate-pulse rounded-md bg-gray-200 dark:bg-gray-700',
        className
      )}
      {...restProps}
    />
  )
}

export default Skeleton
