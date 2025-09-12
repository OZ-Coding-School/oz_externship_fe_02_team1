import type React from 'react'

import { Text } from '@components'
import { cn } from '@utils'

interface CardProps {
  title: string
  children: React.ReactNode
  titleVariant?: 'base' | 'large'
  titleClassName?: string
  cardClassName?: string
}

export default function Card({
  title,
  children,
  titleVariant = 'large',
  titleClassName,
  cardClassName,
}: CardProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col rounded-lg border border-gray-200 bg-white p-[25px]',
        cardClassName
      )}
    >
      <Text
        variant={titleVariant}
        className={cn(
          'pb-2 leading-normal font-semibold text-black',
          titleClassName
        )}
      >
        {title}
      </Text>
      {children}
    </div>
  )
}
