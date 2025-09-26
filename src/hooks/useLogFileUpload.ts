import { useState } from 'react'

import { logApi } from '@api'
import {
  processNewFiles,
  type LogUploadedFile,
} from '@components/create-study-log/logFileUpload.utils'

interface UseLogFileUploadProps {
  currentFiles: LogUploadedFile[]
  onFilesAdded: (newFiles: LogUploadedFile[]) => void
  onFileDeleted: (fileId: string) => void
  groupUuid: string
}

export function useLogFileUpload({
  currentFiles,
  onFilesAdded,
  onFileDeleted,
  groupUuid,
}: UseLogFileUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleAddFiles = async (newFiles: File[]) => {
    const { filesToAdd, errors } = processNewFiles(newFiles, currentFiles)

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
        ...(response.images || []),
        ...(response.attachments || []),
      ]

      allUploadedUrls.forEach((url) => {
        const fileName = url.substring(url.lastIndexOf('/') + 1)
        try {
          const decodedFileName = decodeURIComponent(fileName)
          urlMap.set(decodedFileName, url)
        } catch (e) {
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
        onFilesAdded(newlyUploadedFiles)
      }
    } catch (err) {
      setErrorMessage('파일 업로드에 실패했습니다.')
    }
  }

  const handleDeleteFile = (fileId: string) => {
    onFileDeleted(fileId)
  }

  return {
    isDragging,
    setIsDragging,
    errorMessage,
    setErrorMessage,
    handleAddFiles,
    handleDeleteFile,
  }
}
