export interface Review {
  id: number
  userId: number
  studyGroupId: number
  rating: string // 4_OUT_OF_5_STARS
  content: string // 300
  updatedAt: string
}
