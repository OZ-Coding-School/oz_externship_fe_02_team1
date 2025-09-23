export const MIN_MEMBERS = 2
export const MAX_MEMBERS = 10

export const MIN_RANGE_DAYS = 5

export const MAX_LECTURES = 5

// 스터디 그룹의 상태를 나타내는 상수 객체
export const STUDY_GROUP_STATUS = {
  COMPLETED: '종료됨',
  IN_PROGRESS: '진행중',
} as const

// status 문자열을 variant 값으로 변환하기 위한 객체
export const STATUS_TO_VARIANT = {
  [STUDY_GROUP_STATUS.COMPLETED]: 'ended',
  [STUDY_GROUP_STATUS.IN_PROGRESS]: 'inProgress',
} as const
