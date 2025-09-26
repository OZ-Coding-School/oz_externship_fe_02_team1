export const studyQueryKey = {
  base: ['studies'],
  create: () => [...studyQueryKey.base, 'create'],
  detail: (groupUuid: string) => [...studyQueryKey.base, 'detail', groupUuid],
}
