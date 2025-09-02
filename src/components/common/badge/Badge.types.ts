import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface BadgeColor {
  default: string
  primary: string
  success: string
  danger: string
}

export interface BadgeSize {
  sm: string
  md: string
  lg: string
}

export interface BadgeProps extends ComponentPropsWithoutRef<'span'> {
  label?: string
  children?: ReactNode
  color?: keyof BadgeColor
  size?: keyof BadgeSize
}
