import { cn } from '@utils'
import type { ReactNode } from 'react'

interface UserMenuButtonProps {
  icon: ReactNode
  label: string
  isMobile: boolean
}

export default function UserMenuButton({
  icon,
  label,
  isMobile,
}: UserMenuButtonProps) {
  return (
    <button className={cn('flex items-center', !isMobile && 'px-4 py-2')}>
      <span className="mr-3">{icon}</span>
      {label}
    </button>
  )
}
