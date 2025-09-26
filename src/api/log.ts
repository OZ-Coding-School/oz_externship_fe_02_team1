import { API_PATHS } from '@/constants'
import { axiosInstance } from '@/lib'

import type { CreateStudyLogRequest, UploadLogFileResponse } from './types/log'

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
        timeout: 60000, // 파일 업로드 타임아웃을 60초로 설정
      }
    )
    return data
  },

  createStudyLog: async (
    group_uuid: string,
    payload: CreateStudyLogRequest
  ) => {
    const { data } = await axiosInstance.post(
      API_PATHS.STUDY_NOTES.CREATE_AND_SUMMARY(group_uuid),
      payload
    )
    return data
  },
}
