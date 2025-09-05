import { type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { cn } from '@/utils'
import H5 from '@/components/common/text/H5'

interface CardProps extends ComponentPropsWithoutRef<'div'> {
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
          className="h-32 w-96 items-center justify-center bg-gray-200 object-cover"
        />
        <H5 className="text-gray-900">{title}</H5>
      </header>
      {children}
    </div>
  )
}
