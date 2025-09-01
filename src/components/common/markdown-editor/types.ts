import type { ReactElement } from 'react'
import type {
  ICommand,
  ExecuteState,
  TextAreaTextApi,
} from '@uiw/react-md-editor'

export type MarkdownValue = string

export type PreviewMode = 'edit' | 'preview'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export interface MarkdownEditorProps {
  value: MarkdownValue
  onChange: (newValue: MarkdownValue) => void
  ariaLabel?: string
  height?: number
  className?: string
  placeholder?: string
}

export interface MarkdownPreviewProps {
  value: MarkdownValue
  className?: string
}

export type { ICommand, ExecuteState, TextAreaTextApi, ReactElement }
