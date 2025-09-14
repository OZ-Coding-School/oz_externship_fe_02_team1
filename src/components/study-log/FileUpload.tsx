import { useState } from 'react'

import {
  Toast,
  handleFileDrag,
  handleFileDrop,
  handleFileProcessing,
  type UploadedFile,
} from '@components'
import { MAX_FILE_COUNT } from '@constants'
import { cn } from '@utils'

import { UploadedFileList } from './UploadedFileList'
import { UploadPlaceholder } from './UploadPlaceholder'

interface FileUploadProps {
  onChange: (files: UploadedFile[]) => void
  className?: string
}

export default function FileUpload({ onChange, className }: FileUploadProps) {
  const [files, setFiles] = useState<UploadedFile[]>([])
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // 파일 선택 시 처리
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return

    handleFileProcessing(
      Array.from(e.target.files),
      files,
      setFiles,
      onChange,
      setErrorMessage
    )
    e.target.value = ''
  }

  return (
    <>
      {/* toast 표시 영역 */}
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

      {/* 파일 업로드 영역 */}
      <div
        className={cn(
          'flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-6 transition-colors',
          isDragging && 'border-yellow-600 bg-yellow-50',
          className
        )}
        onDragOver={(e) => handleFileDrag(e, setIsDragging)}
        onDrop={(e) =>
          handleFileDrop(
            e,
            files,
            setFiles,
            setIsDragging,
            onChange,
            (message: string) => setErrorMessage(message)
          )
        }
      >
        {/* 파일 존재 여부에따라 렌더 */}
        {files.length > 0 ? (
          <>
            <UploadedFileList
              files={files}
              setFiles={setFiles}
              onChange={onChange}
            />
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
          <UploadPlaceholder />
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
