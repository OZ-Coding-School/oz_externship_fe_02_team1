import { studyGroupHandlers } from './studyGroupHandlers'
import { studyLogHandlers } from './studyLogHandlers'

export * from './studyGroupHandlers'
export * from './studyLogHandlers'
export const handlers = [...studyGroupHandlers, ...studyLogHandlers]
