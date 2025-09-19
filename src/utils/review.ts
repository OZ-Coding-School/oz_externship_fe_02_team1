import type { Review } from '@models'

export const calculateAverageRating = (ratingList: Review[]): number => {
  const totalCount = ratingList.length
  if (totalCount === 0) return 0

  const sumRating = ratingList.reduce(
    (acc, review) => acc + Number(review.rating.split(' ')[0]),
    0
  )
  return parseFloat((sumRating / totalCount).toFixed(1))
}
