import { reviewHandlers } from './reviewHandlers'
import { studyGroupHandlers } from './studyGroupHandlers'
import { studyLogHandlers } from './studyLogHandlers'

export * from './studyGroupHandlers'
export * from './studyLogHandlers'
export * from './reviewHandlers'
export const handlers = [
  ...studyGroupHandlers,
  ...studyLogHandlers,
  ...reviewHandlers,
]
