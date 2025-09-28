import { useMemo } from 'react'
import { Link, useParams } from 'react-router'

import {
  BreadCrumb,
  LoadingState,
  LogDetailAISummary,
  LogDetailHeader,
  LogDetailMain,
} from '@components'
import { BREAD_CRUMB_PATH } from '@constants'
import { useStudyLogQuery } from '@hooks'
import type { StudyLogDetail } from '@/types'

export default function StudyLogDetail() {
  const { groupId, recordId } = useParams<{
    groupId: string
    recordId: string
  }>()

  // recordId를 숫자로 변환
  const noteId = Number(recordId)

  const { data: studyLogData, isLoading } = useStudyLogQuery(groupId!, noteId)

  // API 응답 데이터를 프론트엔드 컴포넌트에서 사용하는 데이터 형식으로 변환합니다.
  const studyLogDetail: StudyLogDetail | undefined = useMemo(() => {
    if (!studyLogData) return undefined
    return {
      ...studyLogData,
      studyGroupId: String(studyLogData.studyGroup),
    }
  }, [studyLogData])

  const breadCrumbPath = useMemo(() => {
    if (!groupId) return BREAD_CRUMB_PATH
    return [
      ...BREAD_CRUMB_PATH,
      { label: '스터디 기록', to: `/study-group/${groupId}` },
    ]
  }, [groupId])

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
      </div>
      <Link
        to={'/study-group'}
        className="text-base font-normal text-gray-600"
      >{`<- 스터디 그룹으로 돌아가기`}</Link>
    </div>
  )
}
