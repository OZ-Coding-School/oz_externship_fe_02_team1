import { setupWorker } from 'msw/browser'

import {
  studyGroupHandlers,
  studyLogHandlers,
  reviewHandlers,
} from '@mocks/handlers'

const allHandlers = [
  ...studyGroupHandlers,
  ...studyLogHandlers,
  ...reviewHandlers,
]

export const worker = setupWorker(...allHandlers)
