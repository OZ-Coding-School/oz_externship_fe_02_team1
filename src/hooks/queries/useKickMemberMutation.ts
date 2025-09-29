import { useMutation, useQueryClient } from '@tanstack/react-query'

import { studyApi } from '@api'
import { studyQueryKey } from '@hooks'

export const useKickMemberMutation = (groupUuid: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (memberUuid: string) =>
      studyApi.kickGroupMember(groupUuid, memberUuid),
    onSuccess: () => {
      alert('멤버를 내보냈습니다.')

      return queryClient.invalidateQueries({
        queryKey: studyQueryKey.detail(groupUuid),
      })
    },
    onError: () => {
      alert('멤버를 내보내는 데 실패했습니다.')
    },
  })
}
