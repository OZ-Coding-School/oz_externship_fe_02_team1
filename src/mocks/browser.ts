import { setupWorker } from 'msw/browser'
import { authHandlers, studyGroupHandlers } from '@mocks/handlers'

const allHandlers = [...authHandlers, ...studyGroupHandlers]

export const worker = setupWorker(...allHandlers)
