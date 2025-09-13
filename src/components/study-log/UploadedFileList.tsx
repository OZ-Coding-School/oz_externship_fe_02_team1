import { handleFileDelete } from '@components'

interface UploadedFileListProps {
  files: File[]
  setFiles: React.Dispatch<React.SetStateAction<File[]>>
  onChange: (files: File[]) => void
}

export const UploadedFileList = ({
  files,
  setFiles,
  onChange,
}: UploadedFileListProps) => (
  <ul className="mb-4 w-full space-y-1 text-sm text-gray-700">
    {files.map((file, index) => (
      <li
        key={`${file.name}-${file.lastModified}`}
        className="flex items-center justify-between gap-2"
      >
        <span className="truncate">{file.name}</span>
        <button
          type="button"
          onClick={() => handleFileDelete(index, files, setFiles, onChange)}
          className="flex-shrink-0 cursor-pointer text-xs text-red-500"
          aria-label={`파일 ${file.name} 삭제`}
        >
          삭제
        </button>
      </li>
    ))}
  </ul>
)
