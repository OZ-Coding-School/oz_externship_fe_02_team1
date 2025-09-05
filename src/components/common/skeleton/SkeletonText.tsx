import type { HTMLAttributes } from 'react'
import { useMemo } from 'react'
import { cn } from '@/utils/cn'
import Skeleton from '@/components/common/skeleton/Skeleton'

export interface SkeletonTextProps extends HTMLAttributes<HTMLDivElement> {
  lines?: number
  lastLineShort?: boolean
  lineHeightClass?: string
  gapClass?: string
  widths?: number[]
  lineClassName?: string
}

export default function SkeletonText({
  lines = 3,
  lastLineShort = true,
  lineHeightClass = 'h-4',
  gapClass = 'space-y-2',
  widths,
  lineClassName,
  className,
  ...rest
}: SkeletonTextProps) {
  const skeletonKeys = useMemo(
    () => Array.from({ length: Math.max(1, lines) }, () => crypto.randomUUID()),
    [lines]
  )

  const getSkeletonWidth = (index: number): number => {
    if (widths?.[index] !== undefined) {
      return widths[index]
    }

    const isLastLine = index === skeletonKeys.length - 1
    if (lastLineShort && isLastLine) {
      return 70
    }

    return 100
  }

  return (
    <div className={cn(gapClass, className)} aria-hidden {...rest}>
      {skeletonKeys.map((key, index) => {
        const customWidth = getSkeletonWidth(index)

        return (
          <Skeleton
            key={key}
            className={cn('rounded', lineHeightClass, lineClassName)}
            style={{ width: `${customWidth}%` }}
          />
        )
      })}
    </div>
  )
}
