import { useQuery, type UseQueryOptions } from '@tanstack/react-query'

import { logApi, type StudyLogDetailResponse } from '@api'
import { logDetailKey } from '@hooks'
import { keysToCamel } from '@utils'

import type { StudyLogDetail } from '@models'


export const useStudyLogQuery = (
  group_uuid: string,
  note_id: number,
  options?: Omit<
    UseQueryOptions<StudyLogDetailResponse, Error, StudyLogDetail>,
    'queryKey' | 'queryFn'
  >
) => {
  return useQuery({
    queryKey: logDetailKey.studyLogDetail(group_uuid, note_id),
    queryFn: () => logApi.getStudyLogDetail(group_uuid, note_id),
    select: (data: StudyLogDetailResponse): StudyLogDetail => {
      const camelCasedData = keysToCamel(data)
      return {
        ...camelCasedData,
        studyGroupId: String(camelCasedData.studyGroup),
        aiSummary: camelCasedData.aiSummary || null,
      } as StudyLogDetail
    },
    enabled: !!group_uuid && !!note_id,
    ...options,
  })
}
