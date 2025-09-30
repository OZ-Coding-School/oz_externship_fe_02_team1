import type { ReviewListResponse, ReviewListItem } from '@api'

const reviewsForGroup1: ReviewListItem[] = [
  {
    id: 101,
    authorNickname: '딥다이버',
    authorEmail: 'deep@dive.com',
    starRating: 5,
    content:
      '모던 자바스크립트 딥다이브 스터디 덕분에 JS 실력이 정말 많이 늘었어요. 최고!',
    createdAt: new Date('2025-08-31T10:00:00Z').toISOString(),
    updatedAt: new Date('2025-08-31T10:00:00Z').toISOString(),
  },
  {
    id: 102,
    authorNickname: 'JS초보',
    authorEmail: 'beginner@js.com',
    starRating: 4,
    content:
      '내용이 조금 어려웠지만, 스터디원들 덕분에 끝까지 따라갈 수 있었습니다.',
    createdAt: new Date('2025-09-01T11:20:00Z').toISOString(),
    updatedAt: new Date('2025-09-01T11:20:00Z').toISOString(),
  },
]

const reviewsForGroup2: ReviewListItem[] = [
  {
    id: 201,
    authorNickname: '리액트장인',
    authorEmail: 'master@react.com',
    starRating: 5,
    content: '실무 프로젝트 경험을 쌓을 수 있어서 정말 좋았습니다.',
    createdAt: new Date('2025-07-02T14:00:00Z').toISOString(),
    updatedAt: new Date('2025-07-02T14:00:00Z').toISOString(),
  },
]

const createReviewResponse = (
  reviews: ReviewListItem[]
): ReviewListResponse => ({
  count: reviews.length,
  next: null,
  previous: null,
  results: reviews,
})

export const reviewMocks = new Map<string, ReviewListResponse>([
  [
    'node-server-development-study-group',
    createReviewResponse(reviewsForGroup1),
  ],
  ['algorithm-study-group', createReviewResponse(reviewsForGroup2)],
  ['ui-ux-design-study-group', createReviewResponse([])],
])
