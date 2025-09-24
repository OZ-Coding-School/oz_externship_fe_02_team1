import { API_PATHS } from '@constants'
import { axiosInstance } from '@lib'

export const createStudyGroup = (data: FormData) => {
  return axiosInstance.post(API_PATHS.STUDY_GROUP.CREATE, data)
}
