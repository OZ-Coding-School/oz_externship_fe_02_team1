import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { cn } from '@utils'

interface H1Props extends ComponentPropsWithoutRef<'h1'> {
  children: ReactNode
}

export default function H1({ children, className, ...rest }: H1Props) {
  return (
    <h1 className={cn('text-4xl font-bold', className)} {...rest}>
      {children}
    </h1>
  )
}
