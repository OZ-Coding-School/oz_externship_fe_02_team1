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
  duration?: number
  onClose?: () => void
}

export default function Toast({
  type,
  title,
  message,
  className,
  duration = 3000,
  onClose,
}: ToastProps) {
  const { icon: Icon, bg, text, border } = toastStyles[type]
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)

    const timer = setTimeout(() => {
      setShow(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  const handleTransitionEnd = () => {
    if (!show) {
      onClose?.()
    }
  }

  return (
    <div
      className={cn(
        'flex w-96 max-w-xs transform items-center justify-between gap-3 rounded-lg border p-4 leading-tight font-medium outline-offset-[-1px] transition-all duration-300 ease-out',
        show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
        className,
        bg,
        text,
        border
      )}
      onTransitionEnd={handleTransitionEnd}
    >
      <Icon className="h-5 w-5 stroke-1" />
      <div className="flex flex-1 flex-col">
        <Text variant="small">{title}</Text>
        {message && <Text variant="small">{message}</Text>}
      </div>
      <XMarkIcon
        onClick={() => setShow(false)}
        className="h-5 w-5 cursor-pointer stroke-1"
      />
    </div>
  )
}
