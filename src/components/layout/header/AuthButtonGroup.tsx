import { useMediaQuery } from 'react-responsive'

import { Button } from '@components'
import { mediaQuery } from '@constants'
import { cn } from '@utils'

interface AuthButtonGroupProps {
  onClose?: () => void
}

export default function AuthButtonGroup({ onClose }: AuthButtonGroupProps) {
  const isMobile = useMediaQuery({ query: mediaQuery.mobile })

  return (
    <div className={cn('flex gap-2', isMobile && 'flex-col')}>
      <Button variant="ghost" className="text-base" onClick={onClose}>
        로그인
      </Button>
      <Button className="text-base" onClick={onClose}>
        회원가입
      </Button>
    </div>
  )
}
