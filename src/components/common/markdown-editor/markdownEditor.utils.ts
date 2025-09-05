import { commands } from '@uiw/react-md-editor'
import React, { type ReactElement } from 'react'

import { HEADING_LEVELS } from '@/components/common/markdown-editor/markdownEditor.constants'
import type {
  ICommand,
  ExecuteState,
  TextAreaTextApi,
} from '@/components/common/markdown-editor/markdownEditor.types'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export const createHeadingCommand = (
  level: HeadingLevel,
  icon: ReactElement
): ICommand => ({
  name: `h${level}`,
  keyCommand: `h${level}`,
  buttonProps: { 'aria-label': `Insert H${level}` },
  icon,
  execute: (state: ExecuteState, api: TextAreaTextApi) => {
    const prefix = '#'.repeat(level) + ' '
    const modifiedText = state.selectedText
      ? `${prefix}${state.selectedText}\n`
      : prefix
    api.replaceSelection(modifiedText)
  },
})

export const createMarkdownToolbarCommands = (): ICommand[] => {
  const headingCommands = HEADING_LEVELS.map((level) =>
    createHeadingCommand(
      level,
      React.createElement(
        'span',
        {
          className: 'heading-level-icon',
          key: `heading-${level}`,
        },
        `H${level}`
      )
    )
  )

  const headingGroup = commands.group(headingCommands, {
    name: 'heading',
    groupName: 'heading',
    buttonProps: { 'aria-label': '제목 삽입' },
    icon: React.createElement('span', { className: 'heading-base-icon' }, 'H'),
  })

  return [
    commands.bold,
    commands.italic,
    commands.code,
    commands.link,
    headingGroup,
    commands.unorderedListCommand,
  ]
}
