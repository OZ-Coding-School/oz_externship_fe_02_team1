import { useState } from 'react'
import MDEditor, { commands } from '@uiw/react-md-editor'

import { createHeadingCommand } from './utils'
import {
  DEFAULT_EDITOR_HEIGHT,
  EDITOR_ARIA_LABEL,
  HEADING_LEVELS,
} from './constants'
import type { MarkdownEditorProps, PreviewMode } from './types'
import './markdown-editor.css'

export default function MarkdownEditor({
  markdownValue,
  onMarkdownChange,
  ariaLabel = EDITOR_ARIA_LABEL,
  height = DEFAULT_EDITOR_HEIGHT,
  className = '',
}: MarkdownEditorProps) {
  const [previewMode, setPreviewMode] = useState<PreviewMode>('edit')

  const headingCommands = HEADING_LEVELS.map((level) =>
    createHeadingCommand(level, <span className="heading-icon">H{level}</span>)
  )

  const headingGroup = commands.group(headingCommands, {
    name: 'heading',
    groupName: 'heading',
    buttonProps: { 'aria-label': 'Insert heading' },
    icon: <span className="heading-base-icon">H</span>,
  })

  const basicToolbarCommands = [
    commands.bold,
    commands.italic,
    commands.code,
    commands.link,
    headingGroup,
    commands.unorderedListCommand,
  ]

  return (
    <div className={`markdown-editor ${className}`} data-color-mode="light">
      {/* 작성/미리보기 탭 */}
      <div
        className="markdown-editor__tabs"
        role="tablist"
        aria-label="에디터 탭"
      >
        <button
          type="button"
          role="tab"
          aria-selected={previewMode === 'edit'}
          className={`markdown-editor__tab ${
            previewMode === 'edit' ? 'is-active' : ''
          }`}
          onClick={() => setPreviewMode('edit')}
        >
          작성
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={previewMode === 'preview'}
          className={`markdown-editor__tab ${
            previewMode === 'preview' ? 'is-active' : ''
          }`}
          onClick={() => setPreviewMode('preview')}
        >
          미리보기
        </button>
      </div>

      <MDEditor
        value={markdownValue}
        onChange={(newMarkdownValue) =>
          onMarkdownChange(newMarkdownValue ?? '')
        }
        preview={previewMode}
        height={height}
        textareaProps={{ 'aria-label': ariaLabel }}
        commands={basicToolbarCommands}
        extraCommands={[]}
        visibleDragbar={false}
      />

      <div className="markdown-editor__hint" aria-hidden>
        <span>마크다운 문법을 사용할 수 있습니다.</span>
        <span className="hint-code">**굵게**</span>
        <span className="hint-code">*기울임*</span>
        <span className="hint-code">`코드`</span>
        <span className="hint-code">[링크](URL)</span>
        <span className="hint-code">## 제목</span>
      </div>
    </div>
  )
}
