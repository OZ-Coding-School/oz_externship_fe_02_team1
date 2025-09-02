import React, { useState } from 'react'

export default function ImageUpload() {
  const [image, setImage] = useState<string | null>(null)
  const [imageName, setImageName] = useState<string | null>(null)

  const readImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()

    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setImage(reader.result)
      }
    }

    reader.readAsDataURL(file)
    setImageName(file.name)
  }

  return (
    <>
      {image && imageName && <img src={image} alt={imageName} />}
      <input type="file" onChange={readImage} />
    </>
  )
}
