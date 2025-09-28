import { API_PATHS } from '@constants'
import { axiosInstance } from '@lib'
import type { ReviewListRequest, ReviewListResponse } from './types/review'

export const reviewApi = {
  getReviewList: async (params: ReviewListRequest) => {
    const response = await axiosInstance.post<ReviewListResponse>(
      API_PATHS.REVIEW.LIST(params.groupUuid),
      params
    )
    return response.data
  },
  createReview: async (groupUuid: string) => {
    const response = await axiosInstance.post(
      API_PATHS.REVIEW.CREATE(groupUuid)
    )
    return response.data
  },
  updateReview: async (reviewId: number) => {
    const response = await axiosInstance.post(API_PATHS.REVIEW.UPDATE(reviewId))
    return response.data
  },
}
