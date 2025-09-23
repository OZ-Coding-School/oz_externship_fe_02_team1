import { useMutation } from '@tanstack/react-query'
import { createStudyGroup } from '@api'
import type { CreateStudyGroupResponse } from '@models'
import type { AxiosResponse } from 'axios'

export const useStudyGroupQueries = () => {
  const useCreateStudyGroup = () => {
    return useMutation<
      AxiosResponse<CreateStudyGroupResponse>,
      Error,
      FormData
    >({
      mutationFn: createStudyGroup,
      onSuccess: (response) => {
        console.log('Study group created successfully:', response.data)
        alert('스터디 그룹이 성공적으로 생성되었습니다!')
      },
      onError: (error) => {
        console.error('Failed to create study group:', error)
        alert('스터디 그룹 생성에 실패했습니다. 다시 시도해주세요.')
      },
    })
  }

  return {
    useCreateStudyGroup,
  }
}
