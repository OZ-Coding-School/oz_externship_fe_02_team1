import { useState } from 'react'

export const useModal = (initialState = false, onClose?: () => void) => {
  const [isOpen, setIsOpen] = useState(initialState)

  const openModal = () => setIsOpen(true)
  const closeModal = () => {
    setIsOpen(false)
    onClose?.()
  }

  return { isOpen, openModal, closeModal }
}
