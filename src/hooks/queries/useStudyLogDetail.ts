import { useQuery } from '@tanstack/react-query'

import { logApi } from '@api'
import type { StudyLogDetailResponse } from '@api'
import type { StudyLogDetail } from '@/types'
import { keysToCamel } from '@utils'

const QUERY_KEY = {
  studyLogDetail: (group_uuid: string, note_id: number) => [
    'studyLogDetail',
    group_uuid,
    note_id,
  ],
}

export const useStudyLogDetail = (group_uuid: string, note_id: number) => {
  return useQuery({
    queryKey: QUERY_KEY.studyLogDetail(group_uuid, note_id),
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
