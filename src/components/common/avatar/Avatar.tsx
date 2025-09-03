import { useState } from 'react'
import type { AvatarProps } from '@/components/common/avatar/avatar.types'
import AvatarInitials from '@/components/common/avatar/AvatarInitials'
import AvatarStatusDot from '@/components/common/avatar/AvatarStatusDot'
import { cn } from '@/utils/cn'
import { SIZE_STYLES } from '@/components/common/avatar/avatar.constants'

const FALLBACK_LABEL = 'avatar'

const FALLBACK_LABEL = 'avatar'

export default function Avatar({
  src,
  alt,
  name,
  size = 'md',
  status,
  className,
  ...rest
}: AvatarProps) {
  const [imgError, setImgError] = useState(false)

  const label = name || alt || FALLBACK_LABEL
  const isImageVisible = !!src && !imgError
  const isStatusVisible = !!status && size === 'md'

  return (
    <span
      className={cn(
        'relative inline-flex shrink-0 overflow-visible align-middle',
        className
      )}
      {...rest}
    >
      {isImageVisible ? (
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
        <AvatarInitials text={label} size={size} />
      )}

      {isStatusVisible && <AvatarStatusDot status={status} />}
    </span>
  )
}
