export const studyQueryKey = {
  base: ['studies'],
  create: () => [...studyQueryKey.base, 'create'],
  detail: (groupUuid: string) => [...studyQueryKey.base, 'detail', groupUuid],
}

export const chatQueryKey = {
  base: ['chat'],
  list: () => [...chatQueryKey.base, 'list'],
}

export const scheduleKey = {
  base: ['schedule'],
  list: (groupUuid: string) => [...scheduleKey.base, 'list', groupUuid],
  detail: (groupUuid: string, scheduleId: number) => [
    ...scheduleKey.base,
    'detail',
    groupUuid,
    scheduleId,
  ],
}

export const logKey = {
  base: ['log'],
  list: (groupUuid: string) => [...logKey.base, 'list', groupUuid],
  detail: (groupUuid: string, noteId: number) => [
    ...logKey.base,
    'detail',
    groupUuid,
    noteId,
  ],
}

export const reviewKey = {
  base: ['review'],
  list: (groupUuid: string) => [...reviewKey.base, 'list', groupUuid],
}
