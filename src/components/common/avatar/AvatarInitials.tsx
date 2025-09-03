import { cn } from '@/utils/cn'
import type { AvatarInitialsProps } from './avatar.types'

const SIZE_STYLES: Record<'sm' | 'md', string> = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base',
} as const

export default function AvatarInitials({ text, size }: AvatarInitialsProps) {
  return (
    <span
      role="img"
      aria-label={text}
      title={text}
      className={cn(
        SIZE_STYLES[size],
        'flex items-center justify-center rounded-full leading-none font-medium',
        'bg-primary-100 text-primary-600'
      )}
    >
      {Array.from(text)[0]?.toUpperCase() ?? '?'}
    </span>
  )
}
