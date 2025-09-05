import MDEditor from '@uiw/react-md-editor'
import remarkBreaks from 'remark-breaks'

import type { MarkdownValue } from '@/components/common/markdown-editor/markdownEditor.types'
import '@/components/common/markdown-editor/markdown-editor.css'
import { cn } from '@/utils/cn'

export interface MarkdownPreviewProps {
  value: MarkdownValue
  className?: string
}

export default function MarkdownPreview({
  value,
  className,
}: MarkdownPreviewProps) {
  return (
    <div className={cn('markdown-preview', className)} data-color-mode="light">
      <MDEditor.Markdown source={value} remarkPlugins={[remarkBreaks]} />
    </div>
  )
}
