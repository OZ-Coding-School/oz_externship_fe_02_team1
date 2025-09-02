import { cn } from '@/utils'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

interface H1Props extends ComponentPropsWithoutRef<'h1'> {
  children: ReactNode
}

export default function H1({ children, className = '', ...rest }: H1Props) {
  return (
    <h1 className={cn('text-4xl font-bold', className)} {...rest}>
      {children}
    </h1>
  )
}
