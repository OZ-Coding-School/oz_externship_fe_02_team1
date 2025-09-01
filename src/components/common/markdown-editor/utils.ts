import type { ReactElement } from 'react'
import type {
  ICommand,
  ExecuteState,
  TextAreaTextApi,
  HeadingLevel,
} from './types'

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
