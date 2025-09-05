import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline'

export const toastStyles = {
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
