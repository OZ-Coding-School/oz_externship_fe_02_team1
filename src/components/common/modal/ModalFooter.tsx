import { cn } from '@/utils'
import type { ModalFooterProps } from '@/components/common/modal/modal.types'

const ModalFooter = ({
  left,
  right,
  layout = 'leftRight',
  className = '',
}: ModalFooterProps) => {
  const base = 'flex items-center border-t border-gray-200 p-6'
  if (layout === 'center') {
    return (
      <footer className={cn(base, 'justify-center', className)}>
        <div className="flex w-full justify-center">{right}</div>
      </footer>
    )
  }
  if (layout === 'right') {
    return (
      <footer className={cn(base, 'justify-end', className)}>
        <div className="flex items-center gap-2">{right}</div>
      </footer>
    )
  }
  return (
    <footer className={cn(base, 'justify-between', className)}>
      <div className="text-sm text-gray-500">{left}</div>
      <div className="flex items-center gap-2">{right}</div>
    </footer>
  )
}
export default ModalFooter
