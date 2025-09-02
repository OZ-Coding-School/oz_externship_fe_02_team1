import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  [
    'transition-colors',
    'duration-300',
    'cursor-pointer',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        primary: [
          'text-white',
          'bg-primary-500',
          'hover:bg-primary-600',
          'active:bg-primary-700',
          'disabled:bg-primary-500',
        ],
        secondary: [
          'text-gray-900',
          'bg-gray-100',
          'hover:bg-gray-200',
          'active:bg-gray-300',
          'disabled:bg-gray-100',
        ],
        outline: [
          'text-gray-700',
          'border',
          'border-gray-300',
          'bg-white',
          'hover:border-gray-400',
          'hover:bg-gray-50',
          'active:text-gray-800',
          'active:border-gray-400',
          'active:bg-gray-100',
          'disabled:border-gray-300',
          'disabled:bg-white',
        ],
        ghost: [
          'text-gray-700',
          'bg-transparent',
          'hover:bg-gray-100',
          'active:text-gray-800',
          'active:bg-gray-200',
          'disabled:bg-transparent',
        ],
        danger: [
          'text-white',
          'bg-danger-500',
          'hover:bg-danger-600',
          'active:bg-danger-800',
          'disabled:bg-danger-500',
        ],
      },
      size: {
        small: ['py-2', 'px-3', 'rounded-md', 'text-sm'],
        medium: ['py-2.5', 'px-4', 'rounded-lg', 'text-sm'],
        large: ['py-3', 'px-6', 'rounded-lg'],
      },
    },

    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
)
