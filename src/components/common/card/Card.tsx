import { type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { cn } from '@/utils'

export interface CardProps extends ComponentPropsWithoutRef<'div'> {
  title: string
  imageUrl: string
  children?: ReactNode
}

export default function Card({
  title,
  imageUrl,
  children,
  className,
  ...rest
}: CardProps) {
  return (
    <div className={cn('flex flex-col rounded-lg p-6', className)} {...rest}>
      <header>
        <img
          src={imageUrl}
          alt={title}
          className="color-bg-gray-200 h-32 w-96 items-center justify-center object-cover"
        />
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      </header>
      {children}
    </div>
  )
}
