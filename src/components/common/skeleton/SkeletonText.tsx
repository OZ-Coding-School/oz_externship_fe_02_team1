import type { HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'
import Skeleton from '@/components/common/skeleton/Skeleton'

export interface SkeletonTextProps extends HTMLAttributes<HTMLDivElement> {
  lineCount?: number
  isLastLineShort?: boolean
  lineHeightClass?: string
  gapClass?: string
  lineWidthClasses?: string[]
  lineClassName?: string
}

const SkeletonText = ({
  lineCount = 3,
  isLastLineShort = true,
  lineHeightClass = 'h-4',
  gapClass = 'space-y-2',
  lineWidthClasses,
  lineClassName,
  className,
  ...restProps
}: SkeletonTextProps) => {
  const lastLineIndex = lineCount - 1

  const getLineWidthClass = (lineIndex: number): string => {
    const widthClass = lineWidthClasses?.[lineIndex]
    let finalWidthClass = 'w-full'

    if (widthClass) {
      finalWidthClass = widthClass
    } else if (lineIndex === lastLineIndex && isLastLineShort) {
      finalWidthClass = 'w-[70%]'
    }

    return finalWidthClass
  }

  return (
    <div className={cn(gapClass, className)} aria-hidden {...restProps}>
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
