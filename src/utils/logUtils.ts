import { logApi, type CreateStudyLogRequest } from '@api'
import { isImageFile, type LogUploadedFile } from '@utils'

/**
 * 업로드된 파일 목록을 처리하여 서버에 제출할 페이로드를 생성합니다.
 * 1. 새로 추가된 파일과 기존 파일 URL을 분리합니다.
 * 2. 새로 추가된 파일이 있으면 업로드 API를 호출합니다.
 * 3. 모든 파일 URL과 내용을 취합하여 최종 페이로드를 구성합니다.
 */
export const prepareLogSubmitPayload = async (
  uploadedFiles: LogUploadedFile[],
  groupId: string,
  title: string,
  content: string
): Promise<CreateStudyLogRequest> => {
  const { newFilesToUpload, existingFileUrls } = uploadedFiles.reduce(
    (acc, file) => {
      file.url
        ? acc.existingFileUrls.push(file.url)
        : acc.newFilesToUpload.push(file.file)
      return acc
    },
    { newFilesToUpload: [] as File[], existingFileUrls: [] as string[] }
  )

  const uploadedUrls =
    newFilesToUpload.length > 0
      ? await logApi.uploadFiles(newFilesToUpload, groupId)
      : { images: [], attachments: [] }

  const allFileUrls = [
    ...existingFileUrls,
    ...uploadedUrls.images,
    ...uploadedUrls.attachments,
  ]

  return {
    title,
    content,
    imageFiles: allFileUrls.filter(isImageFile),
    attachmentFiles: allFileUrls.filter((url) => !isImageFile(url)),
  }
}
