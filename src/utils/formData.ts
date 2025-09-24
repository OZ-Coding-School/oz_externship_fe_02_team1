export const createFileUploadFormData = (file: File): FormData => {
  const formData = new FormData()
  formData.append('files', file)
  return formData
}
