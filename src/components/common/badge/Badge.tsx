import { badgeColor, badgeSize } from './Badge.styles'
import type { BadgeProps } from './Badge.types'

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
