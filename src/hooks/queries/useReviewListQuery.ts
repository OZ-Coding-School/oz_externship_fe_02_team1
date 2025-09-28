import { useQuery } from '@tanstack/react-query'

import { reviewApi } from '@api'
import { reviewKey } from '@hooks'

export const useReviewListQuery = (groupUuid: string) => {
  return useQuery({
    queryKey: reviewKey.list(groupUuid),
    queryFn: () => reviewApi.getReviewList({ groupUuid }),
    enabled: !!groupUuid,
  })
}
