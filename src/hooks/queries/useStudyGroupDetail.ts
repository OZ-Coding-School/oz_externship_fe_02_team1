import { useQuery } from '@tanstack/react-query'
import { studyApi } from '@api'
import { studyQueryKey } from '@hooks'

export const useStudyGroupDetail = (groupUuid: string) => {
  return useQuery({
    queryKey: [...studyQueryKey.base, groupUuid],
    queryFn: () => studyApi.getStudyGroupDetail(groupUuid),
    enabled: !!groupUuid,
  })
}
