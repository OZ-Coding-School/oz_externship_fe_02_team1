import { http, HttpResponse } from 'msw'

import { API_BASE_URL, API_PATHS } from '@constants'
import { reviewMocks } from '@mocks/datas/reviewListMocks'
import type { ReviewListResponse } from '@api'

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

  http.post(
    `${API_BASE_URL}${API_PATHS.REVIEW.CREATE(':groupUuid')}`,
    async ({ request, params }) => {
      const { groupUuid } = params as { groupUuid: string }
      const newReview = (await request.json()) as Record<string, any>

      const existingReviews = reviewMocks.get(groupUuid)

      if (existingReviews) {
        const newReviewItem = {
          id: Math.random(),
          authorNickname: '조민지',
          authorEmail: 'test@user.com',
          starRating: newReview.starRating,
          content: newReview.content,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
        existingReviews.results.push(newReviewItem)
        existingReviews.count++
      }

      return new HttpResponse(null, { status: 201 })
    }
  ),
]
