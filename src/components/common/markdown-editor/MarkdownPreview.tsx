import MDEditor from '@uiw/react-md-editor'
import type { MarkdownPreviewProps } from './types'
import './markdown-editor.css'

export default function MarkdownPreview({
  value,
  className = '',
}: MarkdownPreviewProps) {
  return (
    <div className={`markdown-preview ${className}`} data-color-mode="light">
      <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
    </div>
  )
}
