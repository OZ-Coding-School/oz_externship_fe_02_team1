import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createStudyLog, uploadFile, type CreateStudyLogPayload } from '@api'

interface UploadFileVariables {
  file: File
  group_uuid: string
}

export const useUploadFileMutation = () => {
  return useMutation({
    mutationFn: ({ file, group_uuid }: UploadFileVariables) =>
      uploadFile(file, group_uuid),
  })
}

export const useCreateStudyLog = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (payload: CreateStudyLogPayload) => createStudyLog(payload),
    onSuccess: (_data, variables) => {
      // 성공 시 스터디 로그 목록 쿼리를 무효화하여 데이터를 새로고침합니다.
      queryClient.invalidateQueries({
        queryKey: ['study-log', variables.group_uuid],
      })
    },
  })
}
