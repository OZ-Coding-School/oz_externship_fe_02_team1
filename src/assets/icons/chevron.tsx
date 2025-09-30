import * as React from 'react'

import { cn } from '@/utils'

type Props = React.SVGProps<SVGSVGElement>

export default function ChevronIcon({ className, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={18}
      height={18}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
      className={cn(className)}
      {...props}
    >
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
