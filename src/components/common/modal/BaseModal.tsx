import { useEffect } from 'react'
import { createPortal } from 'react-dom'

import { cn } from '@/utils'
import MODAL_SIZES from '@/components/common/modal/modalSizes'
import type { BaseModalProps } from '@/components/common/modal/modal.types'
import modalUtils from '@/components/common/modal/modal.utils'

const BaseModal = ({
  isOpen,
  onClose,
  children,
  size = 'md',
  isOverlayDismissible = true,
  labelledById,
  describedById,
  panelClassName = '',
}: BaseModalProps) => {
  if (typeof document === 'undefined') return null
  const root = modalUtils.getOrCreateRoot()

  // ESC 닫기
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  // body 스크롤 잠금
  useEffect(() => {
    if (!isOpen) return
    modalUtils.lockScroll()
    return () => modalUtils.unlockScroll()
  }, [isOpen])

  if (!isOpen) return null
  const { w, h } = MODAL_SIZES[size]

  return createPortal(
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledById}
      aria-describedby={describedById}
    >
      {/* 오버레이 클릭 닫기 */}
      <div
        className="absolute inset-0 bg-black/50"
        onMouseDown={() => {
          if (isOverlayDismissible) onClose()
        }}
      />
      <div
        className={cn(
          'relative min-h-[200px] w-[92%] min-w-[320px] rounded-[12px] bg-white shadow-2xl',
          w,
          h,
          'flex max-h-full flex-col',
          panelClassName
        )}
      >
        {children}
      </div>
    </div>,
    root
  )
}

export default BaseModal
