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
  create: () => [...scheduleKey.base, 'create'],
}
