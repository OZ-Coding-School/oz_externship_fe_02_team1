import { useMutation, useQueryClient } from '@tanstack/react-query'

import { studyApi } from '@api'

import type { CreateStudyGroupResponse } from '@models'
import type { AxiosResponse } from 'axios'
import { studyQueryKey } from '@hooks'

export const useStudyGroupMutations = () => {
  const queryClient = useQueryClient()

  return useMutation<AxiosResponse<CreateStudyGroupResponse>, Error, FormData>({
    mutationFn: (data) => studyApi.createStudyGroup(data),
    onSuccess: (response) => {
      // TODO: 토스트 알림으로 변경
      console.log('Study group created successfully:', response.data)
      alert('스터디 그룹이 성공적으로 생성되었습니다!')
      queryClient.invalidateQueries({ queryKey: studyQueryKey.getList })
    },
    onError: (error) => {
      // TODO: 토스트 알림으로 변경
      console.error('Failed to create study group:', error)
      alert('스터디 그룹 생성에 실패했습니다. 다시 시도해주세요.')
      queryClient.cancelQueries({ queryKey: studyQueryKey.getList })
    },
  })
}
