import { PhotoIcon } from '@heroicons/react/24/outline'
import { type ComponentPropsWithoutRef, type ReactNode } from 'react'

import { cn } from '@utils'

interface ImageCardProps extends ComponentPropsWithoutRef<'div'> {
  title: string
  imgUrl?: string
  children?: ReactNode
  overlayContent?: ReactNode
}

export default function ImageCard({
  title,
  imgUrl,
  children,
  className,
  overlayContent,
  ...rest
}: ImageCardProps) {
  return (
    <div
      className="relative overflow-hidden rounded-lg border border-gray-200"
      {...rest}
    >
      <header>
        <div className="relative aspect-[2/1] overflow-hidden rounded-t-lg">
          {imgUrl ? (
            <img
              src={imgUrl}
              alt={title}
              className="h-full w-full bg-gray-200 object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gray-200">
              <PhotoIcon width={30} color="#9CA3AF" />
            </div>
          )}
          {overlayContent}
        </div>
      </header>
      <div className={cn('flex flex-col', className)}>{children}</div>
    </div>
  )
}
