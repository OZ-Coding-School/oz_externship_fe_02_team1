import { Button } from '@components'

interface AuthButtonGroupProps {
  onClose?: () => void
}

export default function AuthButtonGroup({ onClose }: AuthButtonGroupProps) {
  return (
    <div className="flex flex-col gap-2">
      <Button variant="ghost" className="text-base" onClick={onClose}>
        로그인
      </Button>
      <Button className="text-base" onClick={onClose}>
        회원가입
      </Button>
    </div>
  )
}
