import type { HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  isCircle?: boolean
}

const Skeleton = ({
  isCircle = false,
  className,
  ...restProps
}: SkeletonProps) => {
  const baseClasses = 'animate-pulse bg-gray-200 dark:bg-gray-700'
  const shapeClasses = isCircle ? 'rounded-full' : 'rounded-md'

  return (
    <div
      aria-hidden
      className={cn(baseClasses, shapeClasses, className)}
      {...restProps}
    />
  )
}

export default Skeleton
