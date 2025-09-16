import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import {
  LoadingState,
  LogDetailAISummary,
  LogDetailHeader,
  LogDetailMain,
} from '@components'

import { dummyStudyLog } from '@/mocks/dummyStudyLog'

import type { StudyLog } from '@models'

export default function StudyLogDetail() {
  const [studyLogData, setStudyLogData] = useState<StudyLog | null>(null)
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
    <>
      <LogDetailHeader studyLogData={studyLogData} />
      <LogDetailAISummary aiSummary={studyLogData.ai_summary} />
      <LogDetailMain studyLogData={studyLogData} />
    </>
  )
}
