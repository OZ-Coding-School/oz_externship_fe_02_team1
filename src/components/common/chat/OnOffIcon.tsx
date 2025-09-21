import { cn } from '@utils'

interface OnOffIconProps {
  isActive: boolean
}

export default function OnOffIcon({ isActive }: OnOffIconProps) {
  return (
    <div
      className={cn(
        'h-2 w-2 rounded-full',
        isActive ? 'bg-success-500' : 'bg-gray-300'
      )}
    />
  )
}
