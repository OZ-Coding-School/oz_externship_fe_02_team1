import { API_PATHS } from '@constants'
import { axiosInstance } from '@lib'
import { keysToSnake } from '@utils'

import type {
  CreateStudyLogRequest,
  StudyLogDetailResponse,
  UploadLogFileResponse,
} from '@api'

export const logApi = {
  uploadFiles: async (files: File[], group_uuid: string) => {
    const formData = new FormData()
    files.forEach((file) => {
      const fieldName = file.type.startsWith('image/')
        ? 'image_files'
        : 'attachment_files'
      formData.append(fieldName, file)
    })

    const { data } = await axiosInstance.post<UploadLogFileResponse>(
      API_PATHS.STUDY_NOTES.UPLOAD(group_uuid),
      formData,
      {
        timeout: 60000,
      }
    )
    return data
  },

  createStudyLog: async (
    group_uuid: string,
    payload: {
      title: string
      content: string
      imageFiles: string[]
      attachmentFiles: string[]
    }
  ): Promise<StudyLogDetailResponse> => {
    const requestData = keysToSnake(payload) as CreateStudyLogRequest
    const { data } = await axiosInstance.post<StudyLogDetailResponse>(
      API_PATHS.STUDY_NOTES.CREATE_AND_SUMMARY(group_uuid),
      requestData
    )
    return data
  },

  getStudyLogDetail: async (group_uuid: string, note_id: number) => {
    const response = await axiosInstance.get<StudyLogDetailResponse>(
      API_PATHS.STUDY_NOTES.DETAIL(group_uuid, note_id)
    )
    return response.data
  },
}
