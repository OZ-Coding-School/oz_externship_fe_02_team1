import type { ReactNode } from 'react'

import { cn } from '@utils'
import { Text } from '@components'
import { mediaQuery } from '@constants'
import { useMediaQuery } from 'react-responsive'

const TITLE_SIZES = {
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
} as const

interface SectionHeaderProps {
  title: string
  subtitle?: string
  titleVariant: '2xl' | '3xl' | '4xl'
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
        <p
          className={cn(
            isMobile ? 'text-2xl' : TITLE_SIZES[titleVariant],
            'font-bold',
            'text-gray-900'
          )}
        >
          {title}
        </p>
        <Text className="font-normal text-gray-600">{subtitle}</Text>
      </div>
      {children}
    </div>
  )
}
