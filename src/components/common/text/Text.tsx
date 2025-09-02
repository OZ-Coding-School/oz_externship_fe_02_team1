import { cn } from '@/utils'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

const TextClasses = {
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
  className = '',
  ...rest
}: TextProps) {
  return (
    <span className={cn(TextClasses[variant], className)} {...rest}>
      {children}
    </span>
  )
}
