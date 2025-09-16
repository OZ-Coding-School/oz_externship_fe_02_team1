import { AttachmentIcon, DownloadIcon, ZipIcon } from '@/assets'
import { MarkdownPreview, Text } from '@components'

import type { StudyLog } from '@models'

interface LogDetailMainProps {
  studyLogData: StudyLog
}

export default function LogDetailMain({ studyLogData }: LogDetailMainProps) {
  const { content, attachments } = studyLogData

  return (
    <main>
      {/* 마크다운  */}
      <section className="flex flex-col items-start justify-start border border-t-0 border-gray-200 p-6">
        <MarkdownPreview value={content} />
      </section>

      {/*  첨부파일 */}
      <section className="flex flex-col gap-4 rounded-b-xl border border-t-0 border-gray-200 p-6">
        <div className="flex w-full items-center gap-2">
          <AttachmentIcon />
          <Text variant="large" className="font-semibold text-gray-900">
            첨부 파일 ({attachments.length})개
          </Text>
        </div>
        {attachments && attachments.length > 0 && (
          <div className="flex h-16 justify-between gap-4">
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
          </div>
        )}
      </section>
    </main>
  )
}
