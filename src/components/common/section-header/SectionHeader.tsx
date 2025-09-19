import type { ReactNode } from 'react'

import { useMediaQuery } from 'react-responsive'

import { Text } from '@components'
import { mediaQuery } from '@constants'
import { cn } from '@utils'

const TITLE_SIZES = {
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
} as const

interface SectionHeaderProps {
  title: string
  subtitle?: string
  titleVariant: keyof typeof TITLE_SIZES
  children?: ReactNode
}

export default function SectionHeader({
  title,
  subtitle,
  titleVariant,
  children,
}: SectionHeaderProps) {
  const isMobile = useMediaQuery({ query: mediaQuery.mobile })

  return (
    <div className="flex items-center justify-between">
      <div
        className={cn(
          'flex flex-col',
          titleVariant === '3xl' ? 'gap-2' : 'gap-1'
        )}
      >
        <h2
          className={cn(
            isMobile ? 'text-2xl' : TITLE_SIZES[titleVariant],
            'font-bold',
            'text-gray-900'
          )}
        >
          {title}
        </h2>
        <Text className="font-normal text-gray-600">{subtitle}</Text>
      </div>
      {children}
    </div>
  )
}
