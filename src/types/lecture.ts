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
  originalPrice: number
  discountPrice: number
  platform: string
}
