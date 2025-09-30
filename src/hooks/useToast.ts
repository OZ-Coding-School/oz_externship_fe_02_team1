import { useToastStore } from '@store/toastStore'

export const useToast = () => {
  const addToast = useToastStore((state) => state.addToast)

  return {
    toast: addToast,
  }
}
