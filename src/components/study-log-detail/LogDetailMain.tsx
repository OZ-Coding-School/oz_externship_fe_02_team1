import type { StudyLogDetailResponse } from '@api'
import { LogDetailAttachments, MarkdownPreview } from '@components'

interface LogDetailMainProps {
  studyLogData: StudyLogDetailResponse
}

export default function LogDetailMain({ studyLogData }: LogDetailMainProps) {
  const { content, images, attachments } = studyLogData

  // 이미지 데이터를 첨부 파일 형식으로 변환합니다.
  const imageAttachments =
    images?.map((img) => ({
      id: img.id,
      fileName: img.imgUrl.split('/').pop() || 'image', // URL에서 파일 이름 추출
      fileUrl: img.imgUrl,
    })) || []

  return (
    <main>
      <section className="flex flex-col items-start justify-start border border-gray-200 p-6">
        <MarkdownPreview value={content} />
      </section>
      <LogDetailAttachments
        attachments={[...imageAttachments, ...(attachments || [])]}
      />
    </main>
  )
}
