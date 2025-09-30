import { AttachmentIcon, DownloadIcon, ImageIcon, ZipIcon } from '@assets'
import { Text } from '@components'
import { isImageFile } from '@utils'

import type { Attachment } from '@models'

interface LogDetailAttachmentsProps {
  attachments: Attachment[] | []
}

export default function LogDetailAttachments({
  attachments,
}: LogDetailAttachmentsProps) {
  return (
    <section className="flex flex-col gap-4 rounded-b-xl border border-t-0 border-gray-200 p-4 sm:p-6">
      <div className="flex w-full items-center gap-2">
        <AttachmentIcon />
        <Text variant="large" className="font-semibold">
          첨부 파일 ({attachments.length})개
        </Text>
      </div>
      {attachments && attachments.length > 0 && (
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4">
          {attachments.map((file) => (
            <li key={file.id}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={file.fileUrl}
                download={file.fileName}
                className="flex w-full flex-col items-center gap-3 rounded-lg border border-gray-200 p-3 sm:flex-row"
              >
                {isImageFile(file.fileName) ? <ImageIcon /> : <ZipIcon />}
                <div className="flex w-full flex-col">
                  <Text variant="small" className="font-medium wrap-normal">
                    {file.fileName}
                  </Text>
                  <Text
                    variant="extraSmall"
                    className="font-normal text-gray-500"
                  >
                    다운로드 가능
                  </Text>
                </div>
                <DownloadIcon />
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
