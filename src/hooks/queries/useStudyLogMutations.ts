import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  logApi,
  type CreateStudyLogResponse,
  type CreateStudyLogRequest,
  type StudyLogDetailResponse,
} from '@api'

interface StudyLogMutationsProps {
  groupId: string
  noteId?: number
  onSuccess?: (data: CreateStudyLogResponse | StudyLogDetailResponse) => void
}

export const useStudyLogMutations = ({
  groupId,
  noteId,
  onSuccess,
}: StudyLogMutationsProps) => {
  const queryClient = useQueryClient()

  const { mutate: createLog, isPending: isCreating } = useMutation({
    mutationFn: (payload: CreateStudyLogRequest) =>
      logApi.createStudyLog(groupId, payload),
    onSuccess: (data) => {
      onSuccess?.(data)
    },
    onError: (error) => console.error('스터디 기록 생성 실패:', error),
  })

  const { mutate: updateLog, isPending: isUpdating } = useMutation({
    mutationFn: (payload: CreateStudyLogRequest) => {
      if (!noteId) throw new Error('noteId가 없습니다.')
      return logApi.updateStudyLog(groupId, noteId, payload)
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['studyLogDetail', groupId, noteId],
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
