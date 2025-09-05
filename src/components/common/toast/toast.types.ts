type ToastType = 'success' | 'warning' | 'error'

export interface ToastProps {
  type: ToastType
  title: string
  message: string
  className?: string
}
