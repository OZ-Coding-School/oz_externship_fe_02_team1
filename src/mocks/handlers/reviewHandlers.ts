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
]
