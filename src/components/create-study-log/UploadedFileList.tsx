import { handleFileDelete, type UploadedFile } from './fileUpload.utils'

interface UploadedFileListProps {
  files: UploadedFile[]
  setFiles: React.Dispatch<React.SetStateAction<UploadedFile[]>>
  onChange: (files: UploadedFile[]) => void
}

export const UploadedFileList = ({
  files,
  setFiles,
  onChange,
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
          onClick={() =>
            handleFileDelete(uploadedFile.id, files, setFiles, onChange)
          }
          className="flex-shrink-0 cursor-pointer text-xs text-red-500"
          aria-label={`파일 ${uploadedFile.file.name} 삭제`}
        >
          삭제
        </button>
      </li>
    ))}
  </ul>
)
