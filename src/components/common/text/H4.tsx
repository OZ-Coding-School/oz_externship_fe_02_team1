import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { cn } from '@utils'

interface H4Props extends ComponentPropsWithoutRef<'h4'> {
  children: ReactNode
}

export default function H4({ children, className, ...rest }: H4Props) {
  return (
    <h4 className={cn('text-xl font-semibold', className)} {...rest}>
      {children}
    </h4>
  )
}
