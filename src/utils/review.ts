import type { ReviewListItem } from '@api'

export const calculateAverageRating = (
  ratingList: ReviewListItem[]
): number => {
  const totalCount = ratingList.length
  if (totalCount === 0) return 0

  const sumRating = ratingList.reduce(
    (acc, review) => acc + Number(review.starRating),
    0
  )
  return parseFloat((sumRating / totalCount).toFixed(1))
}
