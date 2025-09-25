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

export interface FileUploadFormDataTypes {
  title: string
  content: string
  imageFiles: string[]
  attachmentFiles: string[]
}
