import { cn } from '@utils'
import { Text } from '@components'

interface LogoProps {
  size?: 'md' | 'lg'
}

export default function Logo({ size = 'md' }: LogoProps) {
  return (
    <div
      className={cn(
        'bg-primary-500 flex items-center justify-center rounded-lg',
        size === 'md' ? 'h-8 w-8' : 'h-10 w-10'
      )}
    >
      <Text
        variant={size === 'md' ? 'base' : 'large'}
        className="font-bold text-white"
      >
        S
      </Text>
    </div>
  )
}
