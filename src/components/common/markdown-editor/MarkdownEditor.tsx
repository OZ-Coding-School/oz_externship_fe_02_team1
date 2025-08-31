import { useMemo, useState } from 'react'
import MDEditor, { commands } from '@uiw/react-md-editor'

import type { MarkdownEditorProps } from './types'
import './markdown-editor.css'

const DEFAULT_HEIGHT = 288

const createHeadingCommand = (level: number) => ({
  name: `h${level}`,
  keyCommand: `h${level}`,
  buttonProps: { 'aria-label': `Insert H${level}` },
  icon: <span className="text-xs font-bold">H{level}</span>,
  execute: (state: any, api: any) => {
    const prefix = '#'.repeat(level) + ' '
    const selected = state.selectedText || ''
    api.replaceSelection(prefix + selected)
  },
})

export default function MarkdownEditor({
  markdownValue,
  onMarkdownChange,
  ariaLabel = '마크다운 에디터',
  height = DEFAULT_HEIGHT,
  className = '',
}: MarkdownEditorProps) {
  const [previewMode, setPreviewMode] = useState<'edit' | 'preview'>('edit')
  const colorModeAttr = useMemo(
    () => ({ 'data-color-mode': 'light' as const }),
    []
  )

  const headingGroup = commands.group(
    [1, 2, 3, 4, 5, 6].map(createHeadingCommand),
    {
      name: 'heading',
      groupName: 'heading',
      icon: (
        <span className="flex h-6 w-6 items-center justify-center text-[25px] leading-none font-semibold">
          H
        </span>
      ),
      buttonProps: { 'aria-label': 'Insert heading' },
    }
  )

  const minimalToolbarCommands = [
    commands.bold,
    commands.italic,
    commands.code,
    commands.link,
    headingGroup,
    (commands as any).unorderedListCommand ?? (commands as any).unorderedList,
  ]

  return (
    <div className={`markdown-editor relative ${className}`} {...colorModeAttr}>
      <div
        className="markdown-editor__tabs"
        role="tablist"
        aria-label="에디터 탭"
      >
        <button
          type="button"
          role="tab"
          aria-selected={previewMode === 'edit'}
          className={`markdown-editor__tab ${previewMode === 'edit' ? 'is-active' : ''}`}
          onClick={() => setPreviewMode('edit')}
        >
          작성
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={previewMode === 'preview'}
          className={`markdown-editor__tab ${previewMode === 'preview' ? 'is-active' : ''}`}
          onClick={() => setPreviewMode('preview')}
        >
          미리보기
        </button>
      </div>

      <MDEditor
        value={markdownValue}
        onChange={(incoming) => onMarkdownChange(incoming ?? '')}
        preview={previewMode}
        height={height}
        textareaProps={{ 'aria-label': ariaLabel }}
        commands={minimalToolbarCommands}
        extraCommands={[]}
        visibleDragbar={false}
      />

      <div className="markdown-editor__hint" aria-hidden>
        <span>마크다운 문법을 사용할 수 있습니다.</span>
        <span className="font-mono">**굵게**</span>
        <span className="font-mono">*기울임*</span>
        <span className="font-mono">`코드`</span>
        <span className="font-mono">[링크](URL)</span>
        <span className="font-mono">## 제목</span>
      </div>
    </div>
  )
}
