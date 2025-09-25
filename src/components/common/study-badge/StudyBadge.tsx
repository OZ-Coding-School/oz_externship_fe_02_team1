import type { ReactNode } from 'react'

import { type VariantProps } from 'class-variance-authority'

import { studyBadgeVariants } from '@components'
import { cn } from '@utils'

interface StudyBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof studyBadgeVariants> {
  member?: number
  maxMember?: number
  children?: ReactNode
}

export default function StudyBadge({
  variant,
  size,
  className,
  member,
  maxMember,
  children,
  ...props
}: StudyBadgeProps) {
  const memberCountText = `${member ?? '--'}/${maxMember ?? '--'}명`

  const getLabel = () => {
    if (variant === 'primary') {
      return memberCountText
    } else if (variant === 'leader') return '리더'
    return variant
  }

  const label = getLabel()

  return (
    <div
      className={cn(studyBadgeVariants({ variant, size }), className)}
      {...props}
    >
      {children}
      {label}
    </div>
  )
}
