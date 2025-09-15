import { useEffect, useState } from 'react'
import axios from 'axios'

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

  if (loading) return <div className="p-4">로딩중...</div>
  if (error) return <div className="p-4 text-red-500">{error}</div>
  return (
    <div className="flex flex-col items-start justify-start rounded-lg bg-yellow-50 p-4">
      {summary || 'AI 요약이 비어있습니다'}
    </div>
  )
}
