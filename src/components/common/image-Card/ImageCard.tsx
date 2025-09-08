import { type ComponentPropsWithoutRef, type ReactNode } from 'react'

import { H5 } from '@components'
import { cn } from '@utils'

interface ImageCardProps extends ComponentPropsWithoutRef<'div'> {
  title: string
  imageUrl: string
  children?: ReactNode
}

export default function ImageCard({
  title,
  imageUrl,
  children,
  className,
  ...rest
}: ImageCardProps) {
  return (
    <div className={cn('flex flex-col rounded-lg p-6', className)} {...rest}>
      <header>
        <img
          src={imageUrl}
          alt={title}
          className="h-32 w-96 bg-gray-200 object-cover"
        />
        <H5 className="text-gray-900">{title}</H5>
      </header>
      {children}
    </div>
  )
}
