import { cn } from '@/utils'
import Text from '@/components/common/text/Text'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { toastStyles } from '@/components/common/toast/Toast.styles'
import type { ToastProps } from '@/components/common/toast/toast.types'

export default function Toast({
  type,
  title,
  message,
  onClose,
  className,
}: ToastProps) {
  const { icon: Icon, bg, text, border } = toastStyles[type]

  return (
    <div
      className={cn(
        'border-offset-[-1px] flex w-96 max-w-96 justify-between gap-3 rounded-lg border-1 p-4 leading-tight font-medium',
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
        onClick={onClose}
        className="h-5 w-5 cursor-pointer stroke-1"
      />
    </div>
  )
}
