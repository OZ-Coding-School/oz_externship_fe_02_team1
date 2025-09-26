import { useState, useEffect } from 'react'

import { logApi } from '@api'
import {
  Toast,
  handleFileDrag,
  handleFileDrop,
  processNewFiles,
  LogUploadedFileList,
  LogUploadPlaceholder,
  type LogUploadedFile,
} from '@components'
import { MAX_FILE_COUNT } from '@constants'
import { cn } from '@utils'



interface LogFileUploadProps {
  group_uuid: string
  onChange: (files: LogUploadedFile[]) => void
  className?: string
}

export default function LogFileUpload({
  group_uuid,
  onChange,
  className,
}: LogFileUploadProps) {
  const [files, setFiles] = useState<LogUploadedFile[]>([])
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // files 상태가 변경될 때마다 부모 컴포넌트로 변경 사항을 전파합니다.
  useEffect(() => {
    onChange(files)
  }, [files, onChange])

  // 신규 파일 처리 및 업로드
  const handleFilesAdded = async (newFilesToAdd: File[]) => {
    const { filesToAdd, errors } = processNewFiles(newFilesToAdd, files)

    if (errors.length > 0) {
      setErrorMessage(errors.join('\n'))
    }

    if (filesToAdd.length === 0) {
      return
    }

    // 먼저 UI에 파일 목록을 표시합니다.
    const newFiles = [...files, ...filesToAdd]
    setFiles(newFiles)

    // 추가된 모든 파일을 한 번에 업로드합니다.
    try {
      const filesToUpload = filesToAdd.map((f) => f.file)
      const response = await logApi.uploadFiles(filesToUpload, group_uuid)
      console.log('업로드 완료 응답:', response)

      if (
        (!response.images || response.images.length === 0) &&
        (!response.attachments || response.attachments.length === 0)
      ) {
        console.error(
          'API 응답은 성공했으나, 반환된 URL 배열(images, attachments)이 비어있습니다.'
        )
      }

      const urlMap = new Map<string, string>()
      const allUploadedFiles = [
        ...(response.images || []),
        ...(response.attachments || []),
      ]

      allUploadedFiles.forEach((url) => {
        const fileName = url.substring(url.lastIndexOf('/') + 1)
        try {
          const decodedFileName = decodeURIComponent(fileName)
          urlMap.set(decodedFileName, url)
        } catch (e) {
          console.error(`URL의 파일 이름 디코딩 실패: ${fileName}`, e)
          urlMap.set(fileName, url) // 디코딩 실패 시 원본 파일 이름 사용
        }
      })

      setFiles((currentFiles) =>
        currentFiles.map((f) => {
          const uploadedUrl = urlMap.get(f.file.name)
          if (!uploadedUrl) {
            console.error(
              `'${f.file.name}' 파일에 해당하는 URL을 찾지 못했습니다.`,
              '생성된 URL Map:',
              urlMap
            )
          }
          return uploadedUrl ? { ...f, url: uploadedUrl } : f
        })
      )
    } catch (err) {
      console.error('파일 업로드 실패:', err)
      setErrorMessage('파일 업로드에 실패했습니다.')
      // 실패한 파일들은 목록에서 제거
      const filesToAddIds = new Set(filesToAdd.map((f) => f.id))
      setFiles((currentFiles) =>
        currentFiles.filter((f) => !filesToAddIds.has(f.id))
      )
    }
  }

  // 파일 선택/추가 처리
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const selectedFiles = Array.from(e.target.files)
    handleFilesAdded(selectedFiles)
    e.target.value = ''
  }

  // 파일 드롭 처리
  const onFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    handleFileDrop(e, handleFilesAdded, setIsDragging)
  }

  const handleFileDelete = (fileId: string) => {
    const updatedFiles = files.filter((file) => file.id !== fileId)
    setFiles(updatedFiles)
  }

  return (
    <>
      {errorMessage && (
        <div className="fixed top-5 right-5 z-50">
          <Toast
            type="error"
            title="파일 업로드 오류"
            message={errorMessage}
            onClose={() => setErrorMessage(null)}
          />
        </div>
      )}

      <div
        className={cn(
          'flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-6 transition-colors',
          isDragging && 'border-yellow-600 bg-yellow-50',
          className
        )}
        onDragOver={(e) => handleFileDrag(e, setIsDragging)}
        onDrop={onFileDrop}
      >
        {files.length > 0 ? (
          <>
            <LogUploadedFileList files={files} onDelete={handleFileDelete} />
            {files.length < MAX_FILE_COUNT && (
              <label
                htmlFor="file-upload"
                className="cursor-pointer text-sm text-yellow-600 hover:underline"
              >
                파일 추가...
              </label>
            )}
          </>
        ) : (
          <LogUploadPlaceholder />
        )}

        <input
          id="file-upload"
          type="file"
          multiple
          onChange={onFileChange}
          className="hidden"
        />
      </div>
    </>
  )
}
