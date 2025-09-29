import { API_PATHS } from '@constants'
import { axiosInstance } from '@lib'
import { keysToSnake } from '@utils'

import {
  type CreateStudyLogRequest,
  type StudyLogDetailResponse,
  type StudyLogListResponse,
  type DeleteStudyLogResponse,
  type UploadLogFileResponse,
} from '@api'

export const logApi = {
  uploadFiles: async (files: File[], groupUuid: string) => {
    const formData = new FormData()
    files.forEach((file) => {
      const fieldName = file.type.startsWith('image/')
        ? 'image_files'
        : 'attachment_files'
      formData.append(fieldName, file)
    })

    const { data } = await axiosInstance.post<UploadLogFileResponse>(
      API_PATHS.STUDY_NOTES.UPLOAD(groupUuid),
      formData,
      {
        timeout: 60000,
      }
    )
    return data
  },

  createStudyLog: async (
    groupUuid: string,
    payload: CreateStudyLogRequest
  ): Promise<StudyLogDetailResponse> => {
    const { data } = await axiosInstance.post<StudyLogDetailResponse>(
      API_PATHS.STUDY_NOTES.CREATE_AND_SUMMARY(groupUuid),
      keysToSnake(payload)
    )
    return data
  },

  getStudyLogDetail: async (groupUuid: string, noteId: number) => {
    const response = await axiosInstance.get<StudyLogDetailResponse>(
      API_PATHS.STUDY_NOTES.DETAIL(groupUuid, noteId)
    )
    return response.data
  },

  updateStudyLog: async (
    groupUuid: string,
    noteId: number,
    payload: CreateStudyLogRequest
  ): Promise<StudyLogDetailResponse> => {
    const { data } = await axiosInstance.patch<StudyLogDetailResponse>(
      API_PATHS.STUDY_NOTES.UPDATE(groupUuid, noteId),
      keysToSnake(payload)
    )
    return data
  },

  deleteStudyLog: async (
    groupUuid: string,
    noteId: number
  ): Promise<DeleteStudyLogResponse> => {
    const response = await axiosInstance.delete(
      API_PATHS.STUDY_NOTES.DELETE(groupUuid, noteId)
    )
    return response.data
  },

  getStudyLogList: async (group_uuid: string) => {
    const response = await axiosInstance.get<StudyLogListResponse[]>(
      API_PATHS.STUDY_NOTES.LIST(group_uuid)
    )
    return response.data
  },
}
