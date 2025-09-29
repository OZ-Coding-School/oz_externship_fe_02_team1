import { useMemo } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import {
  BreadCrumb,
  Button,
  LoadingState,
  LogDetailAISummary,
  LogDetailHeader,
  LogDetailMain,
} from '@components'
import { BREAD_CRUMB_PATH } from '@constants'

import type { StudyLogDetail } from '@models'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useLogDetailQuery } from '@hooks'
import { logApi } from '@/api'
import { useAuthStore } from '@/store'

export default function StudyLogDetail() {
  const { groupId, recordId } = useParams<{
    groupId: string
    recordId: string
  }>()

  // recordId를 숫자로 변환
  const noteId = Number(recordId)

  const navigate = useNavigate()
  const queryClient = useQueryClient()

  // Zustand 스토어에서 현재 로그인한 사용자 정보 가져오기
  const currentUser = useAuthStore((state) => state.user)
  const { data: studyLogData, isLoading } = useLogDetailQuery(groupId!, noteId)

  const { mutate: deleteLog } = useMutation({
    mutationFn: () => logApi.deleteStudyLog(groupId!, noteId),
    onSuccess: () => {
      alert('스터디 기록이 삭제되었습니다.')
      // 목록 페이지의 캐시를 무효화하여 다시 불러오도록 설정
      queryClient.invalidateQueries({ queryKey: ['studyLogs', groupId] })
      // 현재 상세 페이지 캐시 제거
      queryClient.removeQueries({ queryKey: ['studyLog', groupId, noteId] })
      // 목록 페이지로 이동
      navigate(`/study-group/${groupId}`)
    },
    onError: () => {
      alert('삭제 중 오류가 발생했습니다. 다시 시도해주세요.')
    },
  })

  // API 응답 데이터를 프론트엔드 컴포넌트에서 사용하는 데이터 형식으로 변환합니다.
  const studyLogDetail: StudyLogDetail | undefined = useMemo(() => {
    if (!studyLogData) return undefined
    return {
      ...studyLogData,
      studyGroupId: String(studyLogData.studyGroup),
    }
  }, [studyLogData])

  // 현재 사용자가 글 작성자인지 확인
  const isAuthor = useMemo(
    () => currentUser?.uuid === studyLogDetail?.author.id,
    [currentUser, studyLogDetail]
  )

  const breadCrumbPath = useMemo(() => {
    if (!groupId) return BREAD_CRUMB_PATH
    return [
      ...BREAD_CRUMB_PATH,
      { label: '스터디 기록', to: `/study-group/${groupId}` },
    ]
  }, [groupId])

  const handleDelete = () => {
    if (window.confirm('정말로 이 기록을 삭제하시겠습니까?')) {
      deleteLog()
    }
  }

  if (isLoading) {
    return <LoadingState />
  }

  if (!studyLogDetail) {
    // TODO: 404 컴포넌트 또는 에러 메시지
    return <div>스터디 기록을 찾을 수 없습니다.</div>
  }

  return (
    <div className="flex flex-col gap-4">
      <BreadCrumb items={breadCrumbPath} />
      <div>
        <LogDetailHeader studyLogData={studyLogDetail} />
        {studyLogDetail.aiSummary && (
          <LogDetailAISummary summaryText={studyLogDetail.aiSummary} />
        )}
        <LogDetailMain studyLogData={studyLogDetail} />

        {isAuthor && (
          <div className="mt-4 flex justify-end gap-2">
            <Button
              variant="secondary"
              onClick={() =>
                navigate(`/study-group/${groupId}/log/${noteId}/edit`)
              }
            >
              수정하기
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              삭제하기
            </Button>
          </div>
        )}
      </div>
      <Link
        to={'/study-group'}
        className="text-base font-normal text-gray-600"
      >{`<- 스터디 그룹으로 돌아가기`}</Link>
    </div>
  )
}
