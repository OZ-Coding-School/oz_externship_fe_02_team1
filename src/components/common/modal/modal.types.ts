import type { ReactNode } from 'react'

import MODAL_SIZES from '@components/common/modal/modalSizes'

export type ModalSize = keyof typeof MODAL_SIZES
export type FooterLayout = 'leftRight' | 'right' | 'center'

export type ButtonVariant =
  | 'outline'
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'danger'

// 공용 버튼 타입 (FooterButtons용)
export interface FooterButton {
  text: string
  variant: ButtonVariant
  onClick: () => void
  disabled?: boolean
  className?: string
}

export interface FooterButtonsProps {
  buttons: ReadonlyArray<FooterButton>
}

// 모달 컴포넌트 props
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

// 프리셋 렌더 컨텍스트
export interface ModalFooterCtx {
  onClose: () => void
  confirmDisabled?: boolean
  onConfirm?: () => void
  onEdit?: () => void
  createDate?: string | null
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
