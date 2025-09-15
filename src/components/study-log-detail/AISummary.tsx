import axios from 'axios'
import { useEffect, useState } from 'react'

import { BaseEmptyState, LoadingState } from '@components'

interface AISummaryProps {
  recordId?: string
}

export default function AISummary({ recordId }: AISummaryProps) {
  const [summary, setSummary] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    if (!recordId) return

    const fetchAISummary = async () => {
      try {
        setIsLoading(true)
        const {
          data: { summary },
        } = await axios.get('')
        setSummary(summary)
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('AI 요약을 불러오는데 실패했습니다.')
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchAISummary()
  }, [recordId])

  if (isLoading)
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
