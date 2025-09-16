import type { StudyLog } from '@/types/studyLog'
import {
  BaseEmptyState,
  LoadingState,
  LogDetailAISummary,
  LogDetailHeader,
  LogDetailMain,
} from '@components'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function StudyLogDetail() {
  const [studyLogData, setStudyLogData] = useState<StudyLog | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const { recordId } = useParams()

  useEffect(() => {
    if (!recordId) return

    const fetchStudyLog = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const response = await axios.get(
          `/api/v1/study-notes/{group.uuid}/notes/{study_notes.id}/`
        )

        setStudyLogData(response.data)
      } catch (err) {
        console.error('API 호출 중 오류 발생', err)
        setError('스터디 기록을 불러오는 데 실패했습니다.')
      } finally {
        setIsLoading(false)
      }
    }
    fetchStudyLog()
  }, [recordId])

  if (isLoading) {
    return <LoadingState />
  }

  if (error) {
    return <BaseEmptyState title="에러 발생" description={error} />
  }

  if (!studyLogData) {
    return
  }
  return (
    <>
      <LogDetailHeader studyLogData={studyLogData} />
      <LogDetailAISummary aiSummary={studyLogData.ai_summary} />
      <LogDetailMain studyLogData={studyLogData} />
    </>
  )
}
