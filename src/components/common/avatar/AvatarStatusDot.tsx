import type { AvatarProps } from '@/components/common/avatar/avatar.types'
import { cn } from '@/utils/cn'

const STATUS_COLORS: Record<NonNullable<AvatarProps['status']>, string> = {
  online: 'bg-success-500',
  away: 'bg-primary-500',
  busy: 'bg-danger-500',
  offline: 'bg-gray-400',
} as const

export default function AvatarStatusDot({
  status,
}: {
  status: NonNullable<AvatarProps['status']>
}) {
  return (
    <span
      className={cn(
        'absolute right-0 bottom-0 block h-3 w-3 translate-x-[2px] translate-y-[2px]',
        'rounded-full ring-2 ring-white',
        STATUS_COLORS[status]
      )}
      aria-hidden="true"
    />
  )
}
