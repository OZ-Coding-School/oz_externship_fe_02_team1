import { useState } from 'react'
import { CloudArrowUpIcon } from '@heroicons/react/24/outline'
import { cn } from '@utils'
import { Text, Toast } from '@components'
import {
  handleFileProcessing,
  handleFileDelete,
  handleFileDrag,
  handleFileDrop,
} from '@components'
import { MAX_FILE_COUNT, MAX_FILE_SIZE_MB } from '@constants'
import type { ToastProps } from '@components/common/toast/Toast'

interface FileUploadProps {
  onChange: (files: File[]) => void
  className?: string
}

export default function FileUpload({ onChange, className }: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [toast, setToast] = useState<Omit<ToastProps, 'className'> | null>(null)

  // 파일 업로드 에러 발생 시 toast 표시
  const onError = (message: string) => {
    setToast({
      type: 'error',
      title: '파일 업로드 오류',
      message,
    })
  }

  // 파일 선택 시 처리
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return

    handleFileProcessing(
      Array.from(e.target.files), // FileList → 배열 변환
      files, // 현재 파일 상태
      setFiles, // 상태 업데이트 함수
      onChange, // 부모로 파일 전달
      onError
    )
    e.target.value = ''
  }

  // 업로드된 파일 목록 렌더링
  const renderFileList = () => (
    <ul className="mb-4 w-full space-y-1 text-sm text-gray-700">
      {files.map((file, index) => (
        <li
          key={`${file.name}-${index}`}
          className="flex items-center justify-between gap-2"
        >
          <span className="truncate">{file.name}</span>
          <button
            type="button"
            onClick={() => handleFileDelete(index, files, setFiles, onChange)}
            className="flex-shrink-0 text-xs text-red-500"
            aria-label={`파일 ${file.name} 삭제`} // 접근성용 라벨
          >
            삭제
          </button>
        </li>
      ))}
    </ul>
  )

  // 파일 업로드 placeholder 렌더링
  const renderPlaceholder = () => (
    <label
      htmlFor="file-upload"
      className="flex w-full cursor-pointer flex-col items-center justify-center"
    >
      <CloudArrowUpIcon className="h-7 w-8 text-gray-400" aria-hidden="true" />{' '}
      <div>
        <Text variant="small" className="pr-1 text-gray-600">
          파일을 여기에 드래그하거나
        </Text>
        <Text variant="small" className="text-yellow-600">
          클릭하여 선택
        </Text>
      </div>
      <Text variant="extraSmall" className="text-gray-500">
        최대 {MAX_FILE_COUNT}개, 파일당 {MAX_FILE_SIZE_MB}MB까지 업로드 가능
      </Text>
    </label>
  )

  return (
    <>
      {/* toast 표시 영역 */}
      {toast && (
        <div className="fixed top-5 right-5 z-50">
          <Toast
            type={toast.type}
            title={toast.title}
            message={toast.message}
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
          handleFileDrop(e, files, setFiles, setIsDragging, onChange, onError)
        }
      >
        {/* 파일 존재 여부에 따라 렌더링 */}
        {files.length > 0 ? (
          <>
            {renderFileList()} {/* 업로드된 파일 목록 */}
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
          renderPlaceholder() // 파일 없을 때 placeholder
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
