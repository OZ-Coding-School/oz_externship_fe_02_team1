import { type ComponentPropsWithoutRef, type ReactNode } from 'react'

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
    <div
      className={cn(
        'relative flex flex-col rounded-lg border border-gray-200',
        className
      )}
      {...rest}
    >
      <header className="pt-32">
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 h-32 w-96 bg-gray-200 object-cover"
        />
      </header>
      {children}
    </div>
  )
}
