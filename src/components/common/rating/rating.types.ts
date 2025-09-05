export interface RatingCommon {
  value?: number
  max?: number
  className?: string
  iconSize?: number // 16/20/24/28/32
  ariaLabel?: string
  interactiveStep?: 0.5 | 1
}

// 입력전용
export interface RatingInteractiveProps extends RatingCommon {
  readOnly?: false
  onChange: (value: number) => void
}

// 읽기전용
export interface RatingReadOnlyProps extends RatingCommon {
  readOnly: true
  onChange?: never
}

// 최종 Props는 유니온 → 여긴 type이 필요
export type RatingProps = RatingInteractiveProps | RatingReadOnlyProps

export interface UseRatingInteractionsOptions {
  value: number
  max: number
  interactiveStep: 0.5 | 1
  readOnly: boolean
  onChange?: (value: number) => void
}
