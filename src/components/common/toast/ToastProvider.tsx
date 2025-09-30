import { useEffect } from 'react'

import { useToastStore } from '@store/toastStore'

import Toast from './Toast'

export default function ToastProvider() {
  const { toasts, removeToast } = useToastStore()

  useEffect(() => {
    toasts.forEach((toast) => {
      if (toast.duration) {
        const timer = setTimeout(() => {
          removeToast(toast.id)
        }, toast.duration)
        return () => clearTimeout(timer)
      }
    })
  }, [toasts, removeToast])

  return (
    <div className="fixed right-4 bottom-4 z-50 w-full max-w-xs space-y-2">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          title={toast.title}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  )
}
