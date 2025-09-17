import type { StudyGroupReviewList } from '@models'

export const calculateAverageRating = (ratingList: StudyGroupReviewList[]): number => {
  const totalCount = ratingList.length
  if (totalCount === 0) return 0

  const sumRating = ratingList.reduce((acc, review) => acc + review.rating, 0)
  return parseFloat((sumRating / totalCount).toFixed(1))
}
