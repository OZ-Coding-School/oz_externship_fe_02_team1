import { Text } from '@components'

import { AttachmentIcon, DownloadIcon, ZipIcon } from '@assets'
import type { Attachment } from '@/types'

interface LogDetailAttachmentsProps {
  attachments: Attachment[]
}

export default function LogDetailAttachments({
  attachments,
}: LogDetailAttachmentsProps) {
  return (
    <section className="flex flex-col gap-4 rounded-b-xl border border-t-0 border-gray-200 p-6">
      <div className="flex w-full items-center gap-2">
        <AttachmentIcon />
        <Text variant="large" className="font-semibold text-gray-900">
          첨부 파일 ({attachments.length})개
        </Text>
      </div>
      {attachments && attachments.length > 0 && (
        <ul className="flex justify-between gap-4">
          {attachments.map((file) => (
            <li
              key={file.id}
              className="flex w-full items-center gap-3 rounded-lg border border-gray-200 p-3"
            >
              <ZipIcon />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={file.file_url}
                download={file.file_name}
                className="flex w-full flex-col"
              >
                <Text variant="small" className="font-medium text-gray-900">
                  {file.file_name}
                </Text>
                <Text
                  variant="extraSmall"
                  className="font-normal text-gray-500"
                >
                  다운로드 가능
                </Text>
              </a>
              <DownloadIcon />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
