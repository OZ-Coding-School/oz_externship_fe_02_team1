export type MarkdownValue = string

export type PreviewMode = 'edit' | 'preview'

export interface MarkdownEditorProps {
  markdownValue: MarkdownValue
  onMarkdownChange: (nextValue: MarkdownValue) => void
  ariaLabel?: string
  height?: number
  className?: string
}

export interface MarkdownPreviewProps {
  markdownValue: MarkdownValue
  className?: string
}

export interface MarkdownTextState {
  selectedText: string
}

export interface MarkdownTextApi {
  replaceSelection: (text: string) => void
}
