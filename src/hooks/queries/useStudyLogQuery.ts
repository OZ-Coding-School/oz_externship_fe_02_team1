import { useQuery } from '@tanstack/react-query'

import { logApi } from '@api'
import { keysToCamel } from '@utils'

import type { StudyLogDetail } from '@/types'

import { logDetailKey } from './queryKey'

import type { StudyLogDetailResponse } from '@api'

export const useStudyLogQuery = (group_uuid: string, note_id: number) => {
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
  })
}
