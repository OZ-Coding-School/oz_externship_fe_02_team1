import { type CreateScheduleResponse, scheduleApi } from '@api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { scheduleKey } from '@hooks'

export const useScheduleMutaions = () => {
  const queryClient = useQueryClient()

  return useMutation<CreateScheduleResponse, Error, any>({
    mutationFn: (data) => scheduleApi.createSchedule(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: scheduleKey.create() })
    },
    onError: () => {
      queryClient.cancelQueries({ queryKey: scheduleKey.create() })
    },
  })
}
