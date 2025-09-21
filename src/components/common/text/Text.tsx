import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { cn } from '@utils'

const textClasses = {
  large: 'text-lg',
  base: 'text-base',
  small: 'text-sm',
  extraSmall: 'text-xs',
}

interface TextProps extends ComponentPropsWithoutRef<'span'> {
  variant?: 'large' | 'base' | 'small' | 'extraSmall'
  children: ReactNode
}

export default function Text({
  variant = 'base',
  children,
  className,
  ...rest
}: TextProps) {
  return (
    <span
      className={cn('text-gray-900', textClasses[variant], className)}
      {...rest}
    >
      {children}
    </span>
  )
}
