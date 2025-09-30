import { API_PATHS } from '@constants'
import { axiosInstance } from '@lib'

import type {
  CreateReviewRequest,
  ReviewListRequest,
  ReviewListResponse,
} from '@api'

export const reviewApi = {
  getReviewList: async (params: ReviewListRequest) => {
    const response = await axiosInstance.get<ReviewListResponse>(
      API_PATHS.REVIEW.LIST(params.groupUuid)
    )
    return response.data
  },
  createReview: async (groupUuid: string, payload: CreateReviewRequest) => {
    const response = await axiosInstance.post(
      API_PATHS.REVIEW.CREATE(groupUuid),
      payload
    )
    return response.data
  },
  updateReview: async (reviewId: number) => {
    const response = await axiosInstance.patch(
      API_PATHS.REVIEW.UPDATE(reviewId)
    )
    return response.data
  },
}
