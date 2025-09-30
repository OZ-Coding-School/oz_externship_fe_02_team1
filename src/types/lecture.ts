export interface LectureBase {
  id: string
  lectureTitle: string
  instructor: string
}

export interface Lecture extends LectureBase {
  thumbnailImg: string
  urlLink: string
}

export interface LectureDetail extends Lecture {
  id: string
  duration: number
  description: string
  createdAt: string
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
}
