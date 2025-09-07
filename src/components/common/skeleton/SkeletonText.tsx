import type { HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'
import Skeleton from '@/components/common/skeleton/Skeleton'

export interface SkeletonTextProps extends HTMLAttributes<HTMLDivElement> {
  lineCount?: number
  isLastLineShort?: boolean
  lineHeightClass?: string
  gapClass?: string
  widthsPercent?: number[]
  lineClassName?: string
}

const percentWidthClass = (percent: number): string => {
  if (percent >= 95) return 'w-full'
  if (percent >= 83) return 'w-5/6'
  if (percent >= 71) return 'w-3/4'
  if (percent >= 58) return 'w-2/3'
  return 'w-1/2'
}

const SkeletonText = ({
  lineCount = 3,
  isLastLineShort = true,
  lineHeightClass = 'h-4',
  gapClass = 'space-y-2',
  widthsPercent,
  lineClassName,
  className,
  ...restProps
}: SkeletonTextProps) => {
  const lastLineIndex = lineCount - 1

  const getLineWidthClass = (lineIndex: number): string => {
    const percent = widthsPercent?.[lineIndex]

    switch (true) {
      case typeof percent === 'number':
        return percentWidthClass(percent)
      case lineIndex === lastLineIndex && isLastLineShort:
        return 'w-3/4'
      default:
        return 'w-full'
    }
  }

  return (
    <div
      className={cn('w-full', gapClass, className)}
      aria-hidden
      {...restProps}
    >
      {Array.from({ length: lineCount }).map((_, lineIndex) => (
        <Skeleton
          key={lineIndex}
          className={cn(
            'rounded',
            lineHeightClass,
            getLineWidthClass(lineIndex),
            lineClassName
          )}
        />
      ))}
    </div>
  )
}

export default SkeletonText
