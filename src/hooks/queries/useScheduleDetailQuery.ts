import { useQuery } from '@tanstack/react-query'

import { scheduleApi, type ScheduleDatailRequest } from '@api'
import { scheduleKey } from '@hooks'

export const useScheduleDetailQeury = ({
  scheduleId,
  studyGroupUuid,
}: ScheduleDatailRequest) => {
  return useQuery({
    queryKey: scheduleKey.detail(studyGroupUuid, scheduleId),
    queryFn: () =>
      scheduleApi.getScheduleDetail({ scheduleId, studyGroupUuid }),
    enabled: !!scheduleId && !!studyGroupUuid,
  })
}
