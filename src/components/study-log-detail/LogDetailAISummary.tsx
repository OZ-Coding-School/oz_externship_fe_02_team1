import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

import { AIIcon } from '@assets'
import { Text } from '@components'

interface LogDetailAISummaryProps {
  summaryText: string
}

export default function LogDetailAISummary({
  summaryText,
}: LogDetailAISummaryProps) {
  const [isSummaryOpened, setIsSummaryOpened] = useState(false)

  const handleToggleSummary = () => {
    setIsSummaryOpened((prev) => !prev)
  }

  const toggleConfig = isSummaryOpened
    ? { icon: EyeSlashIcon, label: '접기' }
    : { icon: EyeIcon, label: '펼치기' }

  const Icon = toggleConfig.icon

  if (!summaryText) {
    return null
  }
  return (
    <section className="flex flex-col border border-b-0 border-gray-200 p-6">
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center justify-center gap-2">
          <AIIcon />
          <Text variant="large" className="font-semibold">
            AI 학습 내용 요약
          </Text>
        </div>
        <button
          className="flex cursor-pointer items-center gap-1"
          onClick={handleToggleSummary}
        >
          <Icon className="h-4 w-4" />
          <Text variant="small" className="text-gray-600">
            {toggleConfig.label}
          </Text>
        </button>
      </div>
      {isSummaryOpened && (
        <div className="rounded-lg bg-yellow-50 p-4">
          <Text className="text-gray-800">{summaryText}</Text>
        </div>
      )}
    </section>
  )
}
