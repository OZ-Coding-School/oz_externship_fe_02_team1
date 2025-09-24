import axiosInstance from '@/lib/fetcher'
import { API_PATHS } from '@constants'
import { createFileUploadFormData } from '@utils'

export const uploadFile = async (
  file: File,
  group_uuid: string
): Promise<string> => {
  const formData = createFileUploadFormData(file)
  const { data } = await axiosInstance.post<{ url: string }>(
    API_PATHS.STUDY_NOTES.UPLOAD(group_uuid),
    formData,
    { headers: { 'Content-Type': 'multipart/form-data' } }
  )
  return data.url
}

export interface CreateStudyLogPayload {
  title: string
  content: string
  imageFiles: string[]
  attachmentFiles: string[]
  groupUuid: string
}

export const createStudyLog = async (payload: CreateStudyLogPayload) => {
  const { groupUuid, title, content, imageFiles, attachmentFiles } = payload
  const response = await axiosInstance.post(
    API_PATHS.STUDY_NOTES.CREATE_AND_SUMMARY(groupUuid),
    {
      title,
      content,
      imageFiles,
      attachmentFiles,
    }
  )
  return response.data
}
