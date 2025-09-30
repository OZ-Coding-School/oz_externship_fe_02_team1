import { useToastStore } from '@store/toastStore'

import Toast from './Toast'

export default function ToastProvider() {
  const { toasts, removeToast } = useToastStore()

  return (
    <div className="fixed top-4 right-4 z-50 w-full max-w-xs space-y-2">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          title={toast.title}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  )
}
