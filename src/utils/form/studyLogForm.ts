import type { LogUploadedFile } from '@components'

export interface FileUploadFormDataTypes {
  title: string
  content: string
  imageFiles: File[]
  attachmentFiles: File[]
}

export const toFileUploadFormDataTypes = (
  title: string,
  content: string,
  uploadedFiles: LogUploadedFile[]
): FileUploadFormDataTypes => {
  return {
    title,
    content,
    imageFiles: uploadedFiles
      .filter((f) => f.file.type.startsWith('image/'))
      .map((f) => f.file),
    attachmentFiles: uploadedFiles
      .filter((f) => !f.file.type.startsWith('image/'))
      .map((f) => f.file),
  }
}

export const FileUploadFormData = (
  files: FileUploadFormDataTypes
): FormData => {
  const formData = new FormData()
  formData.append('title', files.title)
  formData.append('content', files.content)

  files.imageFiles.forEach((file) => {
    formData.append('image_files', file)
  })

  files.attachmentFiles.forEach((file) => {
    formData.append('attachment_files', file)
  })

  return formData
}
