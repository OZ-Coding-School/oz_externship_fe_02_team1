import { LogDetailAttachments, MarkdownPreview } from '@components'

import type { StudyLogDetail } from '@models'

interface LogDetailMainProps {
  studyLogData: StudyLogDetail
}

export default function LogDetailMain({ studyLogData }: LogDetailMainProps) {
  const { content, attachments } = studyLogData

  return (
    <main>
      <section className="flex flex-col items-start justify-start border border-gray-200 p-6">
        <MarkdownPreview value={content} />
      </section>
      <LogDetailAttachments attachments={attachments || []} />
    </main>
  )
}
