import type { HTMLAttributes } from 'react'

import { cn } from '@/utils/cn'

const Skeleton = ({
  className,
  ...restProps
}: HTMLAttributes<HTMLDivElement>) => {
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
