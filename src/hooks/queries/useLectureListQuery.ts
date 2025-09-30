import { useQuery } from '@tanstack/react-query'

import { lectureApi } from '@api'
import { lectureKey } from '@hooks'

export const useLectureListQuery = () => {
  return useQuery({
    queryKey: lectureKey.list(),
    queryFn: () => lectureApi.getLectureList(),
  })
}
