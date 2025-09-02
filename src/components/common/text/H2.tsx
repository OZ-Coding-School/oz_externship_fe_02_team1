import { cn } from '@/utils'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

interface H2Props extends ComponentPropsWithoutRef<'h2'> {
  children: ReactNode
}

export default function H2({ children, className = '', ...rest }: H2Props) {
  return (
    <h2 className={cn('text-3xl font-bold', className)} {...rest}>
      {children}
    </h2>
  )
}
