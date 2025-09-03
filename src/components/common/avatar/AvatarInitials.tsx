import { cn } from '@/utils/cn'
import type { AvatarInitialsProps } from '@/components/common/avatar/avatar.types'
import { SIZE_STYLES } from '@/components/common/avatar/avatar.constants'

export default function AvatarInitials({ text, size }: AvatarInitialsProps) {
  const uppercaseText = text[0]?.toUpperCase() ?? '?'

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
      {uppercaseText}
    </span>
  )
}
