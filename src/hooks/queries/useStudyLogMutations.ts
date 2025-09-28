import { useMutation, useQueryClient } from '@tanstack/react-query'

import {
  logApi,
  type CreateStudyLogResponse,
  type CreateStudyLogRequest,
  type StudyLogDetailResponse,
} from '@api'

interface StudyLogMutationsProps {
  groupUuid: string
  noteId?: number
  onSuccess?: (data: CreateStudyLogResponse | StudyLogDetailResponse) => void
}

export const useStudyLogMutations = ({
  groupUuid,
  noteId,
  onSuccess,
}: StudyLogMutationsProps) => {
  const queryClient = useQueryClient()

  const { mutate: createLog, isPending: isCreating } = useMutation({
    mutationFn: (payload: CreateStudyLogRequest) =>
      logApi.createStudyLog(groupUuid, payload),
    onSuccess: (data) => {
      onSuccess?.(data)
    },
    onError: (error) => console.error('스터디 기록 생성 실패:', error),
  })

  const { mutate: updateLog, isPending: isUpdating } = useMutation({
    mutationFn: (payload: CreateStudyLogRequest) => {
      if (!noteId) throw new Error('noteId가 없습니다.')
      return logApi.updateStudyLog(groupUuid, noteId, payload)
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['studyLogDetail', groupUuid, noteId],
      })
      onSuccess?.(data as StudyLogDetailResponse)
    },
    onError: (error) => console.error('스터디 기록 수정 실패:', error),
  })

  return {
    createLog,
    isCreating,
    updateLog,
    isUpdating,
  }
}
