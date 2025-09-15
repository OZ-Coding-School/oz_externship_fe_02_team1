import { useEffect, useState } from 'react'
import axios from 'axios'
import { BaseEmptyState, LoadingState } from '@components'

interface AISummaryProps {
  recordId: string
}

export default function AISummary({ recordId }: AISummaryProps) {
  const [summary, setSummary] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchAISummary = async () => {
      try {
        setLoading(true)
        const res = await axios.get('')
        setSummary(res.data.summary)
      } catch (err) {
        setError('AI 요약을 불러오는 데 실패했어요 😢')
      } finally {
        setLoading(false)
      }
    }

    fetchAISummary()
  }, [recordId])

  if (loading)
    return (
      <div className="p-4">
        <LoadingState />
      </div>
    )
  if (error)
    return (
      <div className="p-4 text-red-500">
        <BaseEmptyState title="에러가 발생했습니다." description={error} />
      </div>
    )
  return (
    <div className="flex flex-col items-start justify-start rounded-lg bg-yellow-50 p-4">
      {summary}
    </div>
  )
}
