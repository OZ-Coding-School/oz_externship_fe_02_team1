import { Text } from '@components'
import { cn } from '@utils'
import type React from 'react'

interface CardProps {
  title: string
  children: React.ReactNode
  titleVariant?: 'base' | 'large'
  className?: string
}

export default function Card({
  title,
  children,
  titleVariant = 'large',
  className,
}: CardProps) {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-[25px]">
      <Text
        variant={titleVariant}
        className={cn(
          'pb-2 leading-normal font-semibold text-black',
          className
        )}
      >
        {title}
      </Text>
      {children}
    </div>
  )
}
