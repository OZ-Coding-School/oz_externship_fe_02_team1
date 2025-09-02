import type { BadgeColor, BadgeSize } from './Badge.types'

export const badgeColor: BadgeColor = {
  default: 'bg-gray-100 text-gray-800',
  primary: 'bg-yellow-100 text-yellow-800',
  success: 'bg-green-100 text-green-800',
  danger: 'bg-danger-100 text-red-800',
}

export const badgeSize: BadgeSize = {
  sm: 'px-2 py-0.5',
  md: 'px-2.5 py-1',
  lg: 'px-3 py-1.5',
}
