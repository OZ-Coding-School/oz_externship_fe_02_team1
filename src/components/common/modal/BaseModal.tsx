import { useEffect } from 'react'
import { createPortal } from 'react-dom'

import { cn } from '@/utils'
import MODAL_SIZES from '@/components/common/modal/modalSizes'
import type { BaseModalProps } from '@/components/common/modal/modal.types'

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
  const root = getOrCreateRoot()

  // ESC 닫기
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  // body 스크롤 락
  useEffect(() => {
    if (!isOpen) return
    lockScroll()
    return () => unlockScroll()
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
          w, // ex) max-w-[672px]
          h, // ex) max-h-[685px]
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

// 모달이 열릴 때 있으면 좋은 유틸성이라 해서 작성.
// --- 내부 유틸
// 모달이 붙을 루트 DOM 보장 (없으면 새로 생성)
function getOrCreateRoot() {
  let el = document.getElementById('modal-root')
  if (!el) {
    el = document.createElement('div')
    el.id = 'modal-root'
    document.body.appendChild(el)
  }
  return el
}

let _lockCount = 0 // 여러 모달 중첩 시를 대비한 카운터

// 모달 열릴 때 → 페이지 스크롤 막고 스크롤바 폭만큼 padding 보정
function lockScroll() {
  _lockCount++
  if (_lockCount === 1) {
    const gap = window.innerWidth - document.documentElement.clientWidth
    document.documentElement.style.overflow = 'hidden'
    if (gap) {
      document.documentElement.style.paddingRight = `${gap}px`
    }
  }
}

// 모달 닫힐 때 → 카운트가 0이면 원래 상태로 복원
function unlockScroll() {
  _lockCount = Math.max(0, _lockCount - 1)
  if (_lockCount === 0) {
    document.documentElement.style.overflow = ''
    document.documentElement.style.paddingRight = ''
  }
}
