import { useState } from 'react'
import type { AvatarProps } from '@/components/common/avatar/avatar.types'
import { cn } from '@/utils/cn'

const SIZE_STYLES: Record<'sm' | 'md', string> = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base',
} as const

const STATUS_COLORS: Record<NonNullable<AvatarProps['status']>, string> = {
  online: 'bg-success-500',
  away: 'bg-primary-500',
  busy: 'bg-danger-500',
  offline: 'bg-gray-400',
} as const

const Initials = ({ text, size }: { text: string; size: 'sm' | 'md' }) => (
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

const StatusDot = ({
  status,
}: {
  status: NonNullable<AvatarProps['status']>
}) => (
  <span
    className={cn(
      'absolute right-0 bottom-0 block h-3 w-3 translate-x-[2px] translate-y-[2px]',
      'rounded-full ring-2 ring-white',
      STATUS_COLORS[status]
    )}
    aria-hidden="true"
  />
)

const Avatar = ({
  src,
  alt,
  name,
  size = 'md',
  status,
  className,
  ...rest
}: AvatarProps) => {
  const [imgError, setImgError] = useState(false)

  const label = name || alt || 'avatar'
  const showImage = !!src && !imgError
  const showStatus = !!status && size === 'md'

  return (
    <span
      className={cn(
        'relative inline-flex shrink-0 overflow-visible align-middle',
        className
      )}
      {...rest}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt}
          onError={() => setImgError(true)}
          className={cn(SIZE_STYLES[size], 'rounded-full object-cover')}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      ) : (
        <Initials text={label} size={size} />
      )}

      {showStatus && <StatusDot status={status} />}
    </span>
  )
}

export default Avatar
