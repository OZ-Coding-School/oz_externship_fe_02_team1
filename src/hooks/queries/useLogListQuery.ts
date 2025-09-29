import { useQuery } from '@tanstack/react-query'

import { logApi } from '@api'
import { logKey } from '@hooks'

export const useLogListQuery = (groupUuid: string) => {
  return useQuery({
    queryKey: logKey.list(groupUuid),
    queryFn: () => logApi.getStudyLogList(groupUuid),
    enabled: !!groupUuid,
  })
}
