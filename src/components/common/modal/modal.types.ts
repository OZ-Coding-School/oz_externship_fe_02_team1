import type { ReactNode } from 'react'

import MODAL_SIZES from '@/components/common/modal/modalSizes'

export type ModalSize = keyof typeof MODAL_SIZES

export interface BaseModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  size?: ModalSize
  isOverlayDismissible?: boolean
  labelledById?: string
  describedById?: string
  panelClassName?: string
}

export interface ModalBodyProps {
  children: ReactNode
  className?: string
}

export type FooterLayout = 'leftRight' | 'right' | 'center' // 리터럴 합타입은 type

export interface ModalFooterProps {
  left?: ReactNode
  right?: ReactNode
  layout?: FooterLayout
  className?: string
}

export interface ModalHeaderProps {
  title: ReactNode
  subTitle?: ReactNode
  onClose: () => void
  titleId?: string
  subTitleId?: string
}

export interface ModalFooterCtx {
  onClose: () => void
  confirmDisabled?: boolean
  onConfirm?: () => void
}

export interface ModalHeaderRenderProps {
  onClose: () => void
  title?: ReactNode
  subTitle?: ReactNode
}

export interface ModalPreset {
  size: ModalSize
  header: (props: ModalHeaderRenderProps) => ReactNode
  footer: (ctx: ModalFooterCtx) => ReactNode
}
