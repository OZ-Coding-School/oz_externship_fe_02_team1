import type { ReactElement } from 'react'
import type {
  ICommand,
  ExecuteState,
  TextAreaTextApi,
} from '@uiw/react-md-editor/commands'

export type MarkdownValue = string

export type PreviewMode = 'edit' | 'preview'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

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

// Re-export 라이브러리 타입
export type { ICommand, ExecuteState, TextAreaTextApi, ReactElement }
