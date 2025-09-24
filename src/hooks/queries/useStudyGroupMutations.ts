import { useMutation, useQueryClient } from '@tanstack/react-query'

import { studyApi } from '@api'
import { studyQueryKey } from '@hooks'

import type { CreateStudyGroupResponse } from '@models'
import type { AxiosResponse } from 'axios'

export const useStudyGroupMutations = () => {
  const queryClient = useQueryClient()

  return useMutation<AxiosResponse<CreateStudyGroupResponse>, Error, FormData>({
    mutationFn: (data) => studyApi.createStudyGroup(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: studyQueryKey.getList })
    },
    onError: () => {
      queryClient.cancelQueries({ queryKey: studyQueryKey.getList })
    },
  })
}
