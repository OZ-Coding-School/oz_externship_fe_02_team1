import { useQuery } from '@tanstack/react-query'

import { scheduleApi } from '@api'
import { scheduleKey } from '@hooks'

export const useScheduleListQeury = (groupUuid: string) => {
  return useQuery({
    queryKey: scheduleKey.list(groupUuid),
    queryFn: () => scheduleApi.getScheduleList(groupUuid),
    enabled: !!groupUuid,
  })
}
