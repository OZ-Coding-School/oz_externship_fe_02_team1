import { setupWorker } from 'msw/browser'

import { studyGroupHandlers, studyLogHandlers } from '@mocks/handlers'

const allHandlers = [...studyGroupHandlers, ...studyLogHandlers]

export const worker = setupWorker(...allHandlers)
