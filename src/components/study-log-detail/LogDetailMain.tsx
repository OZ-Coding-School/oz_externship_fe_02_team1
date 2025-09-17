import { LogDetailAttachments, MarkdownPreview } from '@components'

import type { StudyLog } from '@models'

interface LogDetailMainProps {
  studyLogData: StudyLog
}

export default function LogDetailMain({ studyLogData }: LogDetailMainProps) {
  const { content, attachments } = studyLogData

  return (
    <main>
      <section className="flex flex-col items-start justify-start border border-gray-200 p-6">
        <MarkdownPreview value={content} />
      </section>
      <LogDetailAttachments attachments={attachments} />
    </main>
  )
}
