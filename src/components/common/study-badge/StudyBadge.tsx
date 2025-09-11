import type React from 'react'

import { type VariantProps } from 'class-variance-authority'

import { studyBadgeVariants } from '@components'
import { cn } from '@utils'

interface StudyBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof studyBadgeVariants> {
  member?: number
  maxMember?: number
}

interface setLabelTextProps {
  variant?: string | null
}

export default function StudyBadge({
  variant,
  size,
  className,
  member,
  maxMember,
  ...props
}: StudyBadgeProps) {
  const memberCountText = `${member ?? '--'}/${maxMember ?? '--'}명`

  const setLabelText = ({ variant = 'primary' }: setLabelTextProps): string => {
    switch (variant) {
      case 'primary':
        return memberCountText
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
