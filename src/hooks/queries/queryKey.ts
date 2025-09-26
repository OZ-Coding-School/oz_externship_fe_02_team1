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
  create: () => [...scheduleKey.base, 'create'],
}
