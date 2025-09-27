import { useMutation, useQueryClient } from '@tanstack/react-query'

import { type CreateScheduleResponse, scheduleApi } from '@api'
import { scheduleKey } from '@hooks'

export const useScheduleMutations = (groupUuid: string) => {
  const queryClient = useQueryClient()

  return useMutation<CreateScheduleResponse, Error, any>({
    mutationFn: (data) => scheduleApi.createSchedule(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: scheduleKey.list(groupUuid) })
    },
    onError: () => {
      queryClient.cancelQueries({ queryKey: scheduleKey.list(groupUuid) })
    },
  })
}
