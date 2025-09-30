import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { cn } from '@utils'

interface H3Props extends ComponentPropsWithoutRef<'h3'> {
  children: ReactNode
}

export default function H3({ children, className, ...rest }: H3Props) {
  return (
    <h3 className={cn('text-2xl font-bold text-gray-900', className)} {...rest}>
      {children}
    </h3>
  )
}
