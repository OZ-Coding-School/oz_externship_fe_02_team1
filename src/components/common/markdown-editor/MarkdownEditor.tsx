import { useState, useMemo, useCallback } from 'react'
import MDEditor from '@uiw/react-md-editor'
import remarkBreaks from 'remark-breaks'

import { createMarkdownToolbarCommands } from '@/components/common/markdown-editor/markdownEditor.utils'
import {
  EDITOR_ARIA_LABEL,
  DEFAULT_PLACEHOLDER_TEXT,
  EDITOR_TABS,
} from '@/components/common/markdown-editor/markdownEditor.constants'
import MarkdownEditorHint from '@/components/common/markdown-editor/MarkdownEditorHint'
import type {
  MarkdownEditorProps,
  PreviewMode,
} from '@/components/common/markdown-editor/markdownEditor.types'
import '@/components/common/markdown-editor/markdown-editor.css'
import { cn } from '@/utils/cn'

export default function MarkdownEditor({
  value,
  onChange,
  ariaLabel = EDITOR_ARIA_LABEL,
  className,
  placeholder = DEFAULT_PLACEHOLDER_TEXT,
  disabled = false,
}: MarkdownEditorProps) {
  const [currentPreviewMode, setCurrentPreviewMode] =
    useState<PreviewMode>('edit')

  const handlePreviewModeChange = useCallback((newMode: PreviewMode) => {
    setCurrentPreviewMode(newMode)
  }, [])

  const handleEditorValueChange = useCallback(
    (newValue: string | undefined) => {
      onChange(newValue ?? '')
    },
    [onChange]
  )

  const markdownToolbarCommands = useMemo(
    () => createMarkdownToolbarCommands(),
    []
  )

  return (
    <div
      className={cn('markdown-editor', className)}
      data-color-mode="light"
      aria-disabled={disabled}
    >
      {/* 에디터 모드 선택 탭 */}
      <div
        className="markdown-editor__tabs"
        role="tablist"
        aria-label="에디터 모드 선택"
      >
        {EDITOR_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={currentPreviewMode === tab.id}
            className="markdown-editor__tab"
            onClick={() => handlePreviewModeChange(tab.id)}
            disabled={disabled}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <MDEditor
        value={value}
        onChange={handleEditorValueChange}
        preview={currentPreviewMode}
        textareaProps={{
          'aria-label': ariaLabel,
          placeholder,
          disabled,
        }}
        commands={markdownToolbarCommands}
        extraCommands={[]}
        visibleDragbar={false}
        highlightEnable={false}
        previewOptions={{
          remarkPlugins: [remarkBreaks],
        }}
      />

      <MarkdownEditorHint />
    </div>
  )
}
