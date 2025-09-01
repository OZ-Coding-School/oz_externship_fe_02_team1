import { useState, useMemo } from 'react'
import MDEditor, { commands } from '@uiw/react-md-editor'

import { createHeadingCommand } from './utils'
import { EDITOR_ARIA_LABEL, HEADING_LEVELS } from './constants'
import type { MarkdownEditorProps, PreviewMode } from './types'
import './markdown-editor.css'

const TABS: { id: PreviewMode; label: string }[] = [
  { id: 'edit', label: '작성' },
  { id: 'preview', label: '미리보기' },
]

export default function MarkdownEditor({
  value,
  onChange,
  ariaLabel = EDITOR_ARIA_LABEL,

  className = '',
  placeholder = '스터디 그룹에 대한 설명을 작성하세요. 마크다운 문법을 사용할 수 있습니다.',
}: MarkdownEditorProps) {
  const [previewMode, setPreviewMode] = useState<PreviewMode>('edit')

  const toolbarCommands = useMemo(() => {
    const headingCommands = HEADING_LEVELS.map((level) =>
      createHeadingCommand(
        level,
        <span className="heading-level-icon">H{level}</span>
      )
    )

    const headingGroup = commands.group(headingCommands, {
      name: 'heading',
      groupName: 'heading',
      buttonProps: { 'aria-label': 'Insert heading' },
      icon: <span className="heading-base-icon">H</span>,
    })

    return [
      commands.bold,
      commands.italic,
      commands.code,
      commands.link,
      headingGroup,
      commands.unorderedListCommand,
    ]
  }, [])

  return (
    <div className={`markdown-editor ${className}`} data-color-mode="light">
      {/* 작성/미리보기 탭 */}
      <div
        className="markdown-editor__tabs"
        role="tablist"
        aria-label="에디터 모드 선택"
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={previewMode === tab.id}
            className="markdown-editor__tab"
            onClick={() => setPreviewMode(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <MDEditor
        value={value}
        onChange={(newValue) => onChange(newValue ?? '')}
        preview={previewMode}
        textareaProps={{
          'aria-label': ariaLabel,
          placeholder: placeholder,
        }}
        commands={toolbarCommands}
        extraCommands={[]}
        visibleDragbar={false}
        highlightEnable={false}
      />

      <div className="markdown-editor__hint" aria-hidden>
        <span>마크다운 문법을 사용할 수 있습니다.</span>
        <span className="markdown-editor__hint-code">**굵게**</span>
        <span className="markdown-editor__hint-code">*기울임*</span>
        <span className="markdown-editor__hint-code">`코드`</span>
        <span className="markdown-editor__hint-code">[링크](URL)</span>
        <span className="markdown-editor__hint-code">## 제목</span>
      </div>
    </div>
  )
}
