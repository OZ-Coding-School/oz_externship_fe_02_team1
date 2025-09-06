import { SIZE_STYLES } from '@/components/common/avatar/avatar.constants'
import { cn } from '@/utils/cn'

interface AvatarInitialsProps {
  text: string
  size: 'sm' | 'md'
}

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
