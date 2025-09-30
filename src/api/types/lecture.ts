export interface LectureItem {
  uuid: string
  title: string
  instructor: string
  duration: number
  description: string
  updatedAt: string
  averageRating: string
  categories: {
    id: number
    name: string
  }[]
  difficulty: string
  originalPrice: number
  discountPrice: number
  platform: string
  urlLink: string
  thumbnailImgUrl: string
  createdAt: string
}

export interface LectureListResponse {
  next: string | null
  previous: string | null
  results: LectureItem[]
}
