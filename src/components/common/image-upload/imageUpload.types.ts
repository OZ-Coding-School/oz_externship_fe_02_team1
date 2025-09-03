export interface ReadImageParams {
  event: React.ChangeEvent<HTMLInputElement>
  setImage: (image: string | null) => void
  setImageName: (name: string | null) => void
}

export interface ImageDeleteParams {
  setImage: (image: string | null) => void
  setImageName: (name: string | null) => void
  fileInputRef: React.RefObject<HTMLInputElement | null>
}
