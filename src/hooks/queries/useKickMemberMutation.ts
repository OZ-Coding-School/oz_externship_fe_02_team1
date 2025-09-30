import { useMutation, useQueryClient } from '@tanstack/react-query'

import { studyApi } from '@api'
import { studyQueryKey, useToast } from '@hooks'

export const useKickMemberMutation = (groupUuid: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()

  return useMutation({
    mutationFn: (memberUuid: string) =>
      studyApi.kickGroupMember(groupUuid, memberUuid),
    onSuccess: () => {
      toast({
        title: '멤버를 내보냈습니다.',
        message: '',
        type: 'success',
      })

      return queryClient.invalidateQueries({
        queryKey: studyQueryKey.detail(groupUuid),
      })
    },
    onError: () => {
      toast({
        title: '멤버를 내보내는 데 실패했습니다.',
        message: '다시 시도해주세요.',
        type: 'error',
      })
    },
  })
}
