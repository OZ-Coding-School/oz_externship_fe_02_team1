import { useMutation, useQueryClient } from '@tanstack/react-query'

import { studyApi, type CreateStudyGroupResponse } from '@api'
import { studyQueryKey } from '@hooks'

import type { AxiosResponse } from 'axios'

export const useStudyGroupMutations = () => {
  const queryClient = useQueryClient()

  return useMutation<AxiosResponse<CreateStudyGroupResponse>, Error, FormData>({
    mutationFn: (data) => studyApi.createStudyGroup(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: studyQueryKey.create() })
    },
    onError: () => {
      queryClient.cancelQueries({ queryKey: studyQueryKey.create() })
    },
  })
}
