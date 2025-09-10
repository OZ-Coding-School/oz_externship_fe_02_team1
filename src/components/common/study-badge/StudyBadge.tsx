import type React from 'react'

import { type VariantProps } from 'class-variance-authority'

import { studyBadgeVariants } from '@components'
import { cn } from '@utils'

interface StudyBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof studyBadgeVariants> {
  member?: number
  children?: React.ReactNode
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
  children,
  ...props
}: StudyBadgeProps) {
  const setLabelText = ({
    variant = 'primary',
    member,
    maxMember,
  }: setLabelTextProps) => {
    switch (variant) {
      case 'primary':
        return `${member ?? 0}/${maxMember ?? 0}명`
        break
      case 'inProgress':
        return '진행중'
        break
      case 'ended':
        return '종료됨'
        break
      case 'leader':
        return '리더'
        break
      default:
        break
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
