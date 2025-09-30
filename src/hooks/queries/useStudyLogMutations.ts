import { useMutation, useQueryClient } from '@tanstack/react-query'

import {
  logApi,
  type CreateStudyLogResponse,
  type CreateStudyLogRequest,
  type StudyLogDetailResponse,
} from '@api'
import { useToast } from '@hooks'

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
  const { toast } = useToast()

  const { mutate: createLog, isPending: isCreating } = useMutation({
    mutationFn: (payload: CreateStudyLogRequest) =>
      logApi.createStudyLog(groupUuid, payload),
    onSuccess: (data) => {
      onSuccess?.(data)
    },
    onError: () => {
      toast({
        title: '스터디 기록 생성에 실패했습니다.',
        message: '다시 시도해주세요.',
        type: 'error',
      })
    },
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
    onError: () => {
      toast({
        title: '스터디 기록 수정에 실패했습니다.',
        message: '다시 시도해주세요.',
        type: 'error',
      })
    },
  })

  return {
    createLog,
    isCreating,
    updateLog,
    isUpdating,
  }
}
