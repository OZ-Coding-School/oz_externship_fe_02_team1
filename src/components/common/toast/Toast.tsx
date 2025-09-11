import { XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

import { Text, toastStyles } from '@components'
import { cn } from '@utils'

type ToastType = 'success' | 'warning' | 'error'

export interface ToastProps {
  type: ToastType
  title: string
  message: string
  className?: string
  onClose?: () => void
}

export default function Toast({
  type,
  title,
  message,
  className,
  onClose,
}: ToastProps) {
  const { icon: Icon, bg, text, border } = toastStyles[type]
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose?.()
    }, 3000)

    return () => clearTimeout(timer)
  }, [isVisible, onClose])

  const handleClose = () => {
    setIsVisible(false)
    onClose?.()
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
