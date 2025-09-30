import { useState } from 'react'

import { logApi } from '@api'
import { processNewFiles, type LogUploadedFile } from '@utils'

interface UseLogFileUploadProps {
  groupUuid: string
}

export function useLogFileUpload({ groupUuid }: UseLogFileUploadProps) {
  const [uploadedFiles, setUploadedFiles] = useState<LogUploadedFile[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleAddFiles = async (newFiles: File[]) => {
    const { filesToAdd, errors } = processNewFiles(newFiles, uploadedFiles)

    if (errors.length > 0) {
      setErrorMessage(errors.join('\n'))
    }

    if (filesToAdd.length === 0) {
      return
    }

    try {
      const filesToUpload = filesToAdd.map((f) => f.file)
      const response = await logApi.uploadFiles(filesToUpload, groupUuid)

      const urlMap = new Map<string, string>()
      const allUploadedUrls = [
        ...(response.images ?? []),
        ...(response.attachments ?? []),
      ]

      allUploadedUrls.forEach((url) => {
        const fileName = url.substring(url.lastIndexOf('/') + 1)
        try {
          const decodedFileName = decodeURIComponent(fileName)
          urlMap.set(decodedFileName, url)
        } catch {
          urlMap.set(fileName, url)
        }
      })

      const newlyUploadedFiles = filesToAdd
        .map((f) => {
          const uploadedUrl = urlMap.get(f.file.name)
          return { ...f, url: uploadedUrl || '' }
        })
        .filter((f) => f.url)

      if (newlyUploadedFiles.length > 0) {
        setUploadedFiles((current) => [...current, ...newlyUploadedFiles])
      }
    } catch {
      setErrorMessage('파일 업로드에 실패했습니다.')
    }
  }

  const handleDeleteFile = (fileId: string) => {
    setUploadedFiles((current) => current.filter((f) => f.id !== fileId))
  }

  return {
    uploadedFiles,
    setUploadedFiles,
    isDragging,
    setIsDragging,
    errorMessage,
    setErrorMessage,
    handleAddFiles,
    handleDeleteFile,
  }
}
