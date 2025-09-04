import type { ChangeEvent, RefObject, Dispatch, SetStateAction } from 'react'

export interface ImageUploadProps {
  value?: string | null
  name?: string | null
  onChange: (file: File | null) => void
  className?: string
}

export interface ValidateFileParams {
  file: File
}

export interface HandleFileChangeParams {
  event: ChangeEvent<HTMLInputElement>
  onChange: (file: File | null) => void
  setPreview: Dispatch<SetStateAction<string | null>>
  setPreviewName: Dispatch<SetStateAction<string | null>>
  setFileInputKey: Dispatch<SetStateAction<number>>
}

export interface HandleImageDeleteParams {
  onChange: (file: File | null) => void
  setPreview: Dispatch<SetStateAction<string | null>>
  setPreviewName: Dispatch<SetStateAction<string | null>>
  setFileInputKey: Dispatch<SetStateAction<number>>
}

export interface HandleImageReplaceParams {
  fileInputRef: RefObject<HTMLInputElement | null>
}
