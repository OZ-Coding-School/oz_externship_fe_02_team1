import { setupWorker } from 'msw/browser'
import { handlers } from '@mocks/handlers/studyGroupHandlers'

export const worker = setupWorker(...handlers)
