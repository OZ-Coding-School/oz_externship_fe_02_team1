import { useEffect, useState } from 'react'

import { LogUploadedFileList, LogUploadPlaceholder } from '@components'
import { MAX_FILE_COUNT } from '@constants'
import {
  cn,
  handleFileDrag,
  handleFileDrop,
  type LogUploadedFile,
} from '@utils'
import { useToast } from '@hooks'

interface LogFileUploadProps {
  files: LogUploadedFile[]
  onFilesAdded: (newFiles: File[]) => void
  onFileDeleted: (fileId: string) => void
  className?: string
}

export default function LogFileUpload({
  files,
  onFilesAdded,
  onFileDeleted,
  className,
}: LogFileUploadProps) {
  const { toast } = useToast()
  const [isDragging, setIsDragging] = useState(false)
  const [errorMessage, _] = useState<string | null>(null)

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const selectedFiles = Array.from(e.target.files)
    onFilesAdded(selectedFiles)
    e.target.value = ''
  }

  const onFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    handleFileDrop(e, onFilesAdded, setIsDragging)
  }

  useEffect(() => {
    if (errorMessage) {
      toast({
        title: '파일을 업로드하지 못했습니다.',
        message: '다시 시도해주세요.',
        type: 'error',
      })
    }
  }, [errorMessage, toast])

  return (
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
          <LogUploadedFileList files={files} onDelete={onFileDeleted} />
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
        onChange={onFileInputChange}
        className="hidden"
      />
    </div>
  )
}
