import { useQuery, type UseQueryOptions } from '@tanstack/react-query'

import { logApi, type StudyLogDetailResponse } from '@api'
import { logKey } from '@hooks'

export const useLogDetailQuery = (
  groupUuid: string,
  noteId: number,
  options?: Omit<
    UseQueryOptions<StudyLogDetailResponse, Error>,
    'queryKey' | 'queryFn'
  >
) => {
  return useQuery<StudyLogDetailResponse, Error>({
    queryKey: logKey.detail(groupUuid, noteId),
    queryFn: () => logApi.getStudyLogDetail(groupUuid, noteId),
    ...options,
  })
}
