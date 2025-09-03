import type {
  ComponentPropsWithoutRef,
  ReactNode,
  TextareaHTMLAttributes,
  InputHTMLAttributes,
  Ref,
} from 'react'

export interface InputProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
  label?: string
  errorText?: string
  fullWidth?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  ref?: Ref<HTMLInputElement>
}

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  maxLength?: number // 기본 500
  ref?: Ref<HTMLTextAreaElement>
}

export interface DateInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'readOnly'> {
  label?: string
  onOpenCalendar?: () => void
  invalid?: boolean // 폼 검증 결과(테두리만 빨강)
  errorText?: string // 에러 설명 (선택)
  ref?: Ref<HTMLInputElement>
}

export interface TimeInputProps {
  label?: string
  fullWidth?: boolean
  defaultValue?: string
  onChange?: (value: string) => void
  times?: string[] // 표시할 시간 리스트
  ref?: Ref<HTMLDivElement>
}
