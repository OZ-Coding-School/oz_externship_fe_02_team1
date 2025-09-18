export interface Review {
  id: number
  user_id: number
  study_group_id: number
  rating: string // 4_OUT_OF_5_STARS
  content: string // 300
  updated_at: string
}
