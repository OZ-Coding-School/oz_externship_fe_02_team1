import { useMutation, useQueryClient } from '@tanstack/react-query'

import {
  type CreateScheduleResponse,
  scheduleApi,
  type UpdateScheduleRequest,
  type UpdateScheduleResponse,
} from '@api'
import { scheduleKey } from '@hooks'

export const useScheduleMutations = (groupUuid: string) => {
  const queryClient = useQueryClient()

  const createScheduleMutation = useMutation<
    CreateScheduleResponse,
    Error,
    any
  >({
    mutationFn: (data) => scheduleApi.createSchedule(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: scheduleKey.list(groupUuid) })
    },
    onError: () => {
      queryClient.cancelQueries({ queryKey: scheduleKey.list(groupUuid) })
    },
  })

  const updateScheduleMutation = useMutation<
    UpdateScheduleResponse,
    Error,
    { scheduleId: number; data: UpdateScheduleRequest }
  >({
    mutationFn: ({ scheduleId, data }) =>
      scheduleApi.updateSchedule(groupUuid, scheduleId, data),
    onSuccess: (_, { scheduleId }) => {
      queryClient.invalidateQueries({
        queryKey: scheduleKey.detail(groupUuid, scheduleId),
      })
      queryClient.invalidateQueries({ queryKey: scheduleKey.list(groupUuid) })
    },
    onError: () => {
      queryClient.cancelQueries({ queryKey: scheduleKey.list(groupUuid) })
    },
  })

  const deleteScheduleMutation = useMutation<void, Error, number>({
    mutationFn: (scheduleId) => scheduleApi.deleteSchedule(groupUuid, scheduleId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: scheduleKey.list(groupUuid) })
    },
  })

  return {
    createScheduleMutation,
    updateScheduleMutation,
    deleteScheduleMutation,
  }
}
