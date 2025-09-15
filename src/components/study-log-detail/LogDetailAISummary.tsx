import { AISummary } from '@assets'
import { Text } from '@components'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function LogDetailAISummary() {
  const [isSummaryOpened, setIsSummaryOpened] = useState(false)
  return (
    <section className="flex items-center justify-between p-6">
      <div className="flex items-center gap-2">
        <AISummary />
        <Text variant="large" className="font-semibold text-gray-900">
          AI 학습 내용 요약
        </Text>
      </div>
      <div className="flex items-center gap-1">
        {isSummaryOpened === true ? (
          <EyeSlashIcon className="h-4 w-4" />
        ) : (
          <EyeIcon />
        )}
        <Text variant="small" className="text-gray-600">
          접기
        </Text>
      </div>
    </section>
  )
}
