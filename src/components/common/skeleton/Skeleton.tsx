import type { HTMLAttributes } from 'react'

import { cn } from '@utils'

const Skeleton = ({
  className,
  ...restProps
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      aria-hidden
      className={cn('animate-pulse rounded-md bg-gray-200', className)}
      {...restProps}
    />
  )
}

export default Skeleton
