import clsx from 'clsx'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

interface BadgeColor {
  default: string
  primary: string
  success: string
  danger: string
}
interface BadgeSize {
  sm: string
  md: string
  lg: string
}

const badgeColor: BadgeColor = {
  default: 'bg-gray-100 text-gray-800',
  primary: 'bg-yellow-100 text-yellow-800',
  success: 'bg-green-100 text-green-800',
  danger: 'bg-danger-100 text-red-800',
}

const badgeSize: BadgeSize = {
  sm: 'px-2 py-0.5',
  md: 'px-2.5 py-1',
  lg: 'px-3 py-1.5',
}

interface BadgeProps extends ComponentPropsWithoutRef<'span'> {
  children?: ReactNode
  color?: keyof BadgeColor
  size?: keyof BadgeSize
  className?: string
}

export default function Badge({
  children,
  color = 'default',
  size = 'sm',
  className,
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
