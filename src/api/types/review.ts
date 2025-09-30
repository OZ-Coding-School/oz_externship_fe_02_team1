export interface ReviewListRequest {
  groupUuid: string
}

export interface ReviewListItem {
  id: number
  authorNickname: string
  authorEmail: string
  starRating: number
  content: string
  createdAt: string
  updatedAt: string
}

export interface ReviewListResponse {
  count: number
  next: string | null
  previous: string | null
  results: ReviewListItem[]
}

export interface CreateReviewRequest {
  groupUuid: string
  starRating: number
  content: string
  createdAt: string
}
