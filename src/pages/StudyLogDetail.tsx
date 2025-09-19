import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'

import {
  BreadCrumb,
  LoadingState,
  LogDetailAISummary,
  LogDetailHeader,
  LogDetailMain,
} from '@components'
import { BREAD_CRUMB_PATH } from '@constants'
import { dummyStudyLog } from '@mocks/dummyStudyLog'

import type { StudyLogDetail } from '@models'

export default function StudyLogDetail() {
  const [studyLogData, setStudyLogData] = useState<StudyLogDetail | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const { recordId } = useParams()

  // api나오면 더미데이터 교체예정
  useEffect(() => {
    if (!recordId) return
    setIsLoading(true)
    setStudyLogData(dummyStudyLog)
    setIsLoading(false)
  }, [recordId])

  if (isLoading) {
    return <LoadingState />
  }

  if (!studyLogData) {
    return null
  }

  return (
    <div className="flex flex-col gap-4">
      <BreadCrumb items={BREAD_CRUMB_PATH} />
      <div>
        <LogDetailHeader studyLogData={studyLogData} />
        {studyLogData.aiSummary && (
          <LogDetailAISummary aiSummary={studyLogData.aiSummary} />
        )}
        <LogDetailMain studyLogData={studyLogData} />
      </div>
      <Link
        to={'/study-group'}
        className="text-base font-normal text-gray-600"
      >{`<- 스터디 그룹으로 돌아가기`}</Link>
    </div>
  )
}
