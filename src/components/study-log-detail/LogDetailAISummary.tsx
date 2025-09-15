import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

import { AIIcon } from '@assets'
import { Text, AISummary } from '@components'

export default function LogDetailAISummary() {
  const [isSummaryOpened, setIsSummaryOpened] = useState(false)

  const handleToggleSummary = () => {
    setIsSummaryOpened((prev) => !prev)
  }

  const toggleConfig = isSummaryOpened
    ? { icon: EyeSlashIcon, label: '접기' }
    : { icon: EyeIcon, label: '펼치기' }

  const Icon = toggleConfig.icon

  return (
    <section className="flex flex-col p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AIIcon />
          <Text variant="large" className="font-semibold text-gray-900">
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
      {isSummaryOpened && <AISummary />}
    </section>
  )
}
