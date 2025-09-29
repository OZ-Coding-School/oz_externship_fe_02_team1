import { useMutation, useQueryClient } from '@tanstack/react-query'

import { studyApi } from '@api'
import { studyQueryKey } from '@hooks'

export const useKickMemberMutation = (groupUuid: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (memberUuid: string) =>
      studyApi.kickGroupMember(groupUuid, memberUuid),
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: studyQueryKey.detail(groupUuid),
      })
    },
  })
}
