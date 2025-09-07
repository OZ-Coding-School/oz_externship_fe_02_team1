import { cn } from '@/utils'
import { Text } from '@components'
import type { JSX } from 'react'

interface CardProps {
  title: string
  content: JSX.Element
  titleVariant: 'base' | 'large'
  className?: string
}

export default function Card({
  title,
  content,
  titleVariant = 'large',
  className,
}: CardProps) {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-4">
      <Text
        variant={titleVariant}
        className={cn(
          'pb-2 leading-normal font-semibold text-black',
          className
        )}
      >
        {title}
      </Text>
      {content}
    </div>
  )
}
