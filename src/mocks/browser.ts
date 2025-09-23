import { setupWorker } from 'msw/browser'

import { studyGroupHandlers } from '@mocks/handlers'

const allHandlers = [...studyGroupHandlers]

export const worker = setupWorker(...allHandlers)
