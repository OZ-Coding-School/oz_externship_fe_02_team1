import { useMutation, useQueryClient } from '@tanstack/react-query'

import { reviewApi, type CreateReviewRequest } from '@api'
import { reviewKey, useToast } from '@hooks'

export const useReviewCreateMutation = (groupUuid: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()

  return useMutation({
    mutationFn: (payload: CreateReviewRequest) =>
      reviewApi.createReview(groupUuid, payload),
    onSuccess: () => {
      toast({
        title: '리뷰가 등록되었습니다.',
        message: '',
        type: 'success',
      })
      return queryClient.invalidateQueries({
        queryKey: reviewKey.list(groupUuid),
      })
    },
    onError: () => {
      toast({
        title: '리뷰 등록에 실패했습니다.',
        message: '다시 시도해주세요.',
        type: 'error',
      })
    },
  })
}
