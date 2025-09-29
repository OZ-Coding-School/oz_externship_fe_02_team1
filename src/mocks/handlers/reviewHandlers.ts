import { http, HttpResponse } from 'msw'

import { API_BASE_URL, API_PATHS } from '@constants'
import { reviewMocks } from '@mocks/datas/reviewListMocks'

import type { CreateReviewRequest, ReviewListResponse } from '@api'

export const reviewHandlers = [
  http.get(
    `${API_BASE_URL}${API_PATHS.REVIEW.LIST(':groupUuid')}`,
    ({ params }) => {
      const { groupUuid } = params as { groupUuid: string }

      const reviews = reviewMocks.get(groupUuid)

      if (reviews) {
        return HttpResponse.json(reviews)
      }

      const emptyResponse: ReviewListResponse = {
        count: 0,
        next: null,
        previous: null,
        results: [],
      }
      return HttpResponse.json(emptyResponse)
    }
  ),

  /**
   * 스터디 그룹 리뷰 생성 핸들러
   */
  http.post(
    `${API_BASE_URL}${API_PATHS.REVIEW.CREATE(':groupUuid')}`,
    async ({ request, params }) => {
      const { groupUuid } = params as { groupUuid: string }
      const { starRating, content } =
        (await request.json()) as CreateReviewRequest

      const newReview = {
        id: Date.now(),
        authorNickname: '조민지',
        authorEmail: 'admin@ozcoding.site',
        starRating,
        content,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }

      const existingReviews = reviewMocks.get(groupUuid)
      if (existingReviews) {
        existingReviews.results.unshift(newReview)
        existingReviews.count += 1
      }

      return HttpResponse.json(newReview, { status: 201 })
    }
  ),
]
