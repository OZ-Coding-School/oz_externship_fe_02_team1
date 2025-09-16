import type { ReactNode } from 'react'

import { Text } from '@components'

interface scheduleDetailDivProps {
  title: string
  children: ReactNode
}

export default function scheduleDetailDiv({
  title,
  children,
}: scheduleDetailDivProps) {
  return (
    <div className="flex flex-col gap-2">
      <Text variant="small" className="font-medium text-gray-700">
        {title}
      </Text>
      {children}
    </div>
  )
}
