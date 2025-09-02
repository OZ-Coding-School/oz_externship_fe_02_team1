import type { PreviewMode } from './markdownEditor.types'

export const EDITOR_ARIA_LABEL = '마크다운 에디터'

export const HEADING_LEVELS = [1, 2, 3, 4, 5, 6] as const

export const DEFAULT_PLACEHOLDER_TEXT =
  '스터디 그룹에 대한 설명을 작성하세요. 마크다운 문법을 사용할 수 있습니다.'

export const EDITOR_TABS: { id: PreviewMode; label: string }[] = [
  { id: 'edit', label: '작성' },
  { id: 'preview', label: '미리보기' },
]

export const MARKDOWN_SYNTAX_HINTS = [
  { text: '마크다운 문법을 사용할 수 있습니다.', isCode: false },
  { text: '**굵게**', isCode: true },
  { text: '*기울임*', isCode: true },
  { text: '`코드`', isCode: true },
  { text: '[링크](URL)', isCode: true },
  { text: '## 제목', isCode: true },
] as const
