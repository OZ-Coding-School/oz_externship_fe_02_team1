import { MARKDOWN_SYNTAX_HINTS } from '@components'

export default function MarkdownEditorHint() {
  return (
    <div className="markdown-editor__hint" aria-hidden>
      <div className="markdown-editor__hint-syntax">
        {MARKDOWN_SYNTAX_HINTS.map((hint, index) => (
          <span
            key={index}
            className={hint.isCode ? 'markdown-editor__hint-code' : ''}
          >
            {hint.text}
          </span>
        ))}
      </div>
    </div>
  )
}
