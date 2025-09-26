import type { LogUploadedFile } from './logFileUpload.utils'

interface UploadedFileListProps {
  files: LogUploadedFile[]
  onDelete: (fileId: string) => void
}

export const LogUploadedFileList = ({
  files,
  onDelete,
}: UploadedFileListProps) => (
  <ul className="mb-4 w-full space-y-1 text-sm text-gray-700">
    {files.map((uploadedFile) => (
      <li
        key={uploadedFile.id}
        className="flex items-center justify-between gap-2"
      >
        <span className="truncate">{uploadedFile.file.name}</span>
        <button
          type="button"
          onClick={() => onDelete(uploadedFile.id)}
          className="flex-shrink-0 cursor-pointer text-xs text-red-500"
          aria-label={`파일 ${uploadedFile.file.name} 삭제`}
        >
          삭제
        </button>
      </li>
    ))}
  </ul>
)
