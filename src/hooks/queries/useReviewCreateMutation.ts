import { useMutation, useQueryClient } from '@tanstack/react-query'

import { reviewApi, type CreateReviewRequest } from '@api'
import { reviewKey } from '@hooks'

export const useReviewCreateMutation = (groupUuid: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (payload: CreateReviewRequest) =>
      reviewApi.createReview(groupUuid, payload),
    onSuccess: () => {
      // TODO: 추후 토스트 라이브러리로 교체
      alert('리뷰가 등록되었습니다.')
      return queryClient.invalidateQueries({
        queryKey: reviewKey.list(groupUuid),
      })
    },
    onError: (error) => {
      console.error('리뷰 등록 실패:', error)
      // TODO: 추후 토스트 라이브러리로 교체
      alert('리뷰 등록에 실패했습니다.')
    },
  })
}
