import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { cn } from '@utils'

interface H5Props extends ComponentPropsWithoutRef<'h5'> {
  children: ReactNode
}

export default function H5({ children, className, ...rest }: H5Props) {
  return (
    <h5
      className={cn('text-lg font-semibold text-gray-900', className)}
      {...rest}
    >
      {children}
    </h5>
  )
}
