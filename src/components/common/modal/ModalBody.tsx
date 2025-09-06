import type { ModalBodyProps } from '@components/common/modal/modal.types'
import { cn } from '@utils'

const ModalBody = ({ children, className = '' }: ModalBodyProps) => {
  return (
    <div className={cn('min-h-0 flex-1 overflow-auto p-6', className)}>
      {children}
    </div>
  )
}

export default ModalBody
