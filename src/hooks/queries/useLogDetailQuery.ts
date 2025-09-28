import { useQuery, type UseQueryOptions } from '@tanstack/react-query'

import { logApi, type StudyLogDetailResponse } from '@api'
import { logDetailKey } from '@hooks'

export const useLogDetailQuery = (
  groupUuid: string,
  noteId: number,
  options?: Omit<
    UseQueryOptions<StudyLogDetailResponse, Error>,
    'queryKey' | 'queryFn'
  >
) => {
  return useQuery<StudyLogDetailResponse, Error>({
    queryKey: logDetailKey.studyLogDetail(groupUuid, noteId),
    queryFn: () => logApi.getStudyLogDetail(groupUuid, noteId),
    ...options,
  })
}
