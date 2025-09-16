import { MarkdownPreview } from '@components'

import type { StudyLog } from '@models'

interface LogDetailMainProps {
  studyLogData: StudyLog
}

export default function LogDetailMain({ studyLogData }: LogDetailMainProps) {
  const { content } = studyLogData

  return (
    <main>
      <section className="flex flex-col items-start justify-start p-6">
        <MarkdownPreview value={content} />
      </section>
    </main>
  )
}
