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
  image_files: string[]
  attachment_files: string[]
  group_uuid: string
}

export const createStudyLog = async (payload: CreateStudyLogPayload) => {
  const { group_uuid, title, content, image_files, attachment_files } = payload
  const response = await axiosInstance.post(
    API_PATHS.STUDY_NOTES.CREATE_AND_SUMMARY(group_uuid),
    {
      title,
      content,
      image_files,
      attachment_files,
    }
  )
  return response.data
}
