import { http, HttpResponse } from 'msw'

import { API_BASE_URL, API_PATHS } from '@constants'

export const authHandlers = [
  http.post(`${API_BASE_URL}${API_PATHS.AUTH.REFRESH}`, () => {
    return HttpResponse.json(
      { accessToken: 'mock-access-token' },
      { status: 200 }
    )
  }),
]
