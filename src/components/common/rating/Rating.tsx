import { StarIcon as StarSolid } from '@heroicons/react/24/solid'
import { StarIcon as StarOutline } from '@heroicons/react/24/outline'

import { cn } from '@/utils'

import type { RatingProps } from '@/components/common/rating/rating.types'
import ratingUtils from '@/components/common/rating/rating.utils'
import useRatingInteractions from '@/components/common/rating/rating.interactions'

const Rating = ({
  value = 0,
  max = 5,
  onChange,
  className = '',
  readOnly = false,
  iconSize = 24,
  ariaLabel = '별점',
  interactiveStep = 0.5,
}: RatingProps) => {
  const { percentStep10, WIDTH_10_CLASS, sizeToHWClass } = ratingUtils
  const sizeClass = sizeToHWClass(iconSize)

  const { handleKeyDown, handlePointerDown } = useRatingInteractions({
    value,
    max,
    interactiveStep,
    readOnly,
    onChange,
  })

  return (
    <div
      role={readOnly ? undefined : 'slider'}
      aria-label={ariaLabel}
      aria-valuemin={readOnly ? undefined : 0}
      aria-valuemax={readOnly ? undefined : max}
      aria-valuenow={readOnly ? undefined : value}
      tabIndex={readOnly ? -1 : 0}
      onKeyDown={handleKeyDown}
      className={cn('flex items-center gap-1', className)}
    >
      {Array.from({ length: max }, (_, i) => {
        const index1 = i + 1
        const stepped = percentStep10(value, index1) // 0,10,...,100
        const widthClass = WIDTH_10_CLASS[stepped]

        return (
          <button
            key={index1}
            type="button"
            aria-hidden={readOnly ? true : undefined}
            tabIndex={-1}
            disabled={readOnly}
            onPointerDown={handlePointerDown(i)}
            className={cn(
              'relative inline-flex touch-none select-none',
              sizeClass
            )}
          >
            <StarOutline
              aria-hidden
              className="absolute inset-0 text-gray-300"
            />
            <span
              aria-hidden
              className={cn(
                'absolute top-0 left-0 h-full overflow-hidden',
                widthClass
              )}
            >
              <StarSolid className="text-primary-500 block h-full w-auto" />
            </span>
          </button>
        )
      })}
    </div>
  )
}

export default Rating
