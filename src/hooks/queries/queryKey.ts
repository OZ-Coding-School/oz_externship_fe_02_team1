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

export const logDetailKey = {
  studyLogDetail: (group_uuid: string, note_id: number) => [
    'studyLogDetail',
    group_uuid,
    note_id,
  ],
}
