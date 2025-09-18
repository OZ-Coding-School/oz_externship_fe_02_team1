export interface LectureBase {
  id: string
  title: string
  instructor: string
}

export interface Lecture extends LectureBase {
  thumbnail_img: string
  url_link: string
}

export interface LectureDetail extends Lecture {
  original_price: number
  discount_price: number
  platform: string
}
