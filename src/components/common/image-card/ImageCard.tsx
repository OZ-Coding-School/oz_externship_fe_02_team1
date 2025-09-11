import { PhotoIcon } from '@heroicons/react/24/outline'
import { type ComponentPropsWithoutRef, type ReactNode } from 'react'

import { cn } from '@utils'

interface ImageCardProps extends ComponentPropsWithoutRef<'div'> {
  title: string
  imageUrl?: string
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
        'relative flex flex-col overflow-hidden rounded-lg border border-gray-200',
        className
      )}
      {...rest}
    >
      <header className="pt-32">
        <div className="absolute inset-0 h-32 max-w-96">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="bg-gray-200 object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gray-200">
              <PhotoIcon width={30} color="#9CA3AF" />
            </div>
          )}
        </div>
      </header>
      {children}
    </div>
  )
}
