import { badgeColor, badgeSize } from '@/components/common/badge/Badge.styles'
import type { BadgeProps } from '@/components/common/badge/Badge.types'

import clsx from 'clsx'

export default function Badge({
  children,
  color = 'default',
  size = 'sm',
  className = '',
  ...rest
}: BadgeProps) {
  return (
    <span
      className={clsx(
        'rounded-full',
        badgeColor[color],
        badgeSize[size],
        className
      )}
      {...rest}
    >
      {children}
    </span>
  )
}
