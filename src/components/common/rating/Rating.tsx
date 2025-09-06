import { StarIcon as StarOutline } from '@heroicons/react/24/outline'
import { StarIcon as StarSolid } from '@heroicons/react/24/solid'

import { useRatingInteractions, ratingUtils } from '@components'
import { cn } from '@utils'

interface RatingCommon {
  value?: number
  max?: number
  className?: string
  iconSize?: number // 16/20/24/28/32
  ariaLabel?: string
  interactiveStep?: 0.5 | 1
}

// 입력전용
interface RatingInteractiveProps extends RatingCommon {
  readOnly?: false
  onChange: (value: number) => void
}

// 읽기전용
interface RatingReadOnlyProps extends RatingCommon {
  readOnly: true
  onChange?: never
}

// 최종 Props는 유니온 → 여긴 type이 필요
type RatingProps = RatingInteractiveProps | RatingReadOnlyProps

const Rating = ({
  value = 0,
  max = 5,
  onChange,
  className,
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
        const startIndex = i + 1
        const stepped = percentStep10(value, startIndex) // 0,10,...,100
        const widthClass = WIDTH_10_CLASS[stepped]

        return (
          <button
            key={startIndex}
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
