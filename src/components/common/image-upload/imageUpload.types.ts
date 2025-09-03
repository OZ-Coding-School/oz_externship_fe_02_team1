export interface ImageUploadProps {
  value?: string | null
  name?: string | null
  onChange?: (fileUrl: string | null, fileName: string | null) => void
  className?: string
}

export interface ReadImageParams {
  event: React.ChangeEvent<HTMLInputElement>
  onChange?: (fileUrl: string | null, fileName: string | null) => void
}

export interface ImageDeleteParams {
  onChange?: (fileUrl: string | null, fileName: string | null) => void
  fileInputRef: React.RefObject<HTMLInputElement | null>
}

export interface HandleFileChangeParams extends ReadImageParams {
  fileInputRef: React.RefObject<HTMLInputElement | null>
}
