import type React from 'react'

import { type VariantProps } from 'class-variance-authority'

import { studyBadgeVariants } from '@components'
import { cn } from '@utils'

interface StudyBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof studyBadgeVariants> {
  member?: number
}

interface setLabelTextProps {
  variant?: string | null
  member?: number
  maxMember?: number
}

export default function StudyBadge({
  variant,
  size,
  className,
  member,
  ...props
}: StudyBadgeProps) {
  const setLabelText = ({
    variant = 'primary',
    member,
    maxMember,
  }: setLabelTextProps): string => {
    switch (variant) {
      case 'primary':
        return `${member ?? '--'}/${maxMember ?? '--'}명`
      case 'inProgress':
        return '진행중'
      case 'ended':
        return '종료됨'
      case 'leader':
        return '리더'
      default:
        return ''
    }
  }

  const label = setLabelText({ variant: variant })

  return (
    <div
      className={cn(studyBadgeVariants({ variant, size }), className)}
      {...props}
    >
      {label}
    </div>
  )
}
