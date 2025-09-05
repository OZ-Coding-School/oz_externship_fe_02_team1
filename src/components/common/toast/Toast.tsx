import { cn } from '@/utils'
import { Text } from '../text'
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

type ToastType = 'success' | 'warning' | 'error'

interface ToastProps {
  type: ToastType
  title: string
  message: string
  onClose?: () => void
  className?: string
}

const typeStyles = {
  success: {
    bg: 'bg-green-50',
    text: 'text-green-800',
    icon: CheckCircleIcon,
    border: 'border-green-200',
  },
  warning: {
    bg: 'bg-yellow-50',
    text: 'text-yellow-400',
    icon: ExclamationCircleIcon,
    border: 'border-yellow-200',
  },
  error: {
    bg: 'bg-red-50',
    text: 'text-red-800',
    icon: XCircleIcon,
    border: 'border-red-200',
  },
}

export default function Toast({
  type,
  title,
  message,
  onClose,
  className,
}: ToastProps) {
  const Icon = typeStyles[type].icon
  const styles = typeStyles[type]

  return (
    <div
      className={cn(
        'border-offset-[-1px] flex w-96 max-w-96 justify-between gap-3 rounded-lg border-1 p-4 leading-tight font-medium',
        className,
        styles.bg,
        styles.text,
        styles.border
      )}
    >
      <Icon className="h-5 w-5 stroke-1" />
      <div className="flex flex-1 flex-col">
        <Text variant="small">{title}</Text>
        <Text variant="small">{message}</Text>
      </div>
      <XMarkIcon
        onClick={onClose}
        className="h-5 w-5 cursor-pointer stroke-1"
      />
    </div>
  )
}
