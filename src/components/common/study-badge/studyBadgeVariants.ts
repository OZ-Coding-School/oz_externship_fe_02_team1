import { cva } from 'class-variance-authority'

export const studyBadgeVariants = cva(['py-1', 'rounded-full', 'font-medium'], {
  variants: {
    variant: {
      primary: ['text-gray-900', 'bg-white'],
      inProgress: ['text-white', 'bg-success-500'],
      ended: ['text-white', 'bg-gray-500'],
      leader: ['text-white', 'bg-primary-500'],
    },
    size: {
      small: ['px-2', 'text-xs'],
      large: ['px-3', 'text-sm'],
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'small',
  },
})
