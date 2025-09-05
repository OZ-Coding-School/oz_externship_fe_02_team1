import { XMarkIcon } from '@heroicons/react/24/outline'

import Text from '@/components/common/text/Text'
import { toastStyles } from '@/components/common/toast/toast.styles'
import type { ToastProps } from '@/components/common/toast/toast.types'
import { cn } from '@/utils'
import { useState } from 'react'

export default function Toast({ type, title, message, className }: ToastProps) {
  const { icon: Icon, bg, text, border } = toastStyles[type]
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div
      className={cn(
        'flex w-96 max-w-96 justify-between gap-3 rounded-lg border p-4 leading-tight font-medium outline-offset-[-1px]',
        className,
        bg,
        text,
        border
      )}
    >
      <Icon className="h-5 w-5 stroke-1" />
      <div className="flex flex-1 flex-col">
        <Text variant="small">{title}</Text>
        <Text variant="small">{message}</Text>
      </div>
      <XMarkIcon
        onClick={handleClose}
        className="h-5 w-5 cursor-pointer stroke-1"
      />
    </div>
  )
}
