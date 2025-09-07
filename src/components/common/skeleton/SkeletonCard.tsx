import type { HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'
import Skeleton from '@/components/common/skeleton/Skeleton'

export interface SkeletonCardProps extends HTMLAttributes<HTMLDivElement> {
  widthClass?: string
  heightClass?: string
  radiusClass?: string
}

const SkeletonCard = ({
  widthClass = 'w-24',
  heightClass = 'h-16',
  radiusClass = 'rounded-sm',
  className,
  ...restProps
}: SkeletonCardProps) => {
  return (
    <Skeleton
      className={cn(widthClass, heightClass, radiusClass, className)}
      {...restProps}
    />
  )
}

export default SkeletonCard
