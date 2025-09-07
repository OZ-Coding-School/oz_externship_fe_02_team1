import type { HTMLAttributes } from 'react'

import Skeleton from '@/components/common/skeleton/Skeleton'
import { cn } from '@/utils/cn'

export interface SkeletonAvatarProps extends HTMLAttributes<HTMLDivElement> {
  sizeClass?: string
}

const SkeletonAvatar = ({
  sizeClass = 'h-12 w-12',
  className,
  ...restProps
}: SkeletonAvatarProps) => {
  return (
    <Skeleton
      className={cn('rounded-full', sizeClass, className)}
      {...restProps}
    />
  )
}

export default SkeletonAvatar
