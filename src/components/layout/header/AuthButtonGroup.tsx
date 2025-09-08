import { cn } from '@/utils'
import { Button } from '@components'

interface AuthButtonGroupProps {
  flexDirection?: 'col' | 'row'
  onClose?: () => void
}

export default function AuthButtonGroup({
  flexDirection,
  onClose,
}: AuthButtonGroupProps) {
  return (
    <div className={cn('flex gap-2', flexDirection === 'col' && 'flex-col')}>
      <Button variant="ghost" className="text-base" onClick={onClose}>
        로그인
      </Button>
      <Button className="text-base" onClick={onClose}>
        회원가입
      </Button>
    </div>
  )
}
