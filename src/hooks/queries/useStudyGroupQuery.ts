import { useQuery } from '@tanstack/react-query'

import { studyApi } from '@api'
import { studyQueryKey } from '@hooks'

export const useStudyGroupQuery = (groupUuid: string) => {
  return useQuery({
    queryKey: studyQueryKey.detail(groupUuid),
    queryFn: () => studyApi.getStudyGroupDetail(groupUuid),
    enabled: !!groupUuid,
  })
}
