import type { ReactNode } from 'react'

import { Text } from '@components'

interface ScheduleDetailDivProps {
  title: string
  children: ReactNode
}

export default function ScheduleDetailDiv({
  title,
  children,
}: ScheduleDetailDivProps) {
  return (
    <div className="flex flex-col gap-2">
      <Text variant="small" className="font-medium text-gray-700">
        {title}
      </Text>
      {children}
    </div>
  )
}
