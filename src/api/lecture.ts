import { API_PATHS } from '@constants'
import { axiosInstance } from '@lib'

import type { LectureListResponse } from '@api'

export const lectureApi = {
  getLectureList: async () => {
    const response = await axiosInstance.get<LectureListResponse>(
      API_PATHS.LECTURES.LIST
    )
    return response.data
  },
}
