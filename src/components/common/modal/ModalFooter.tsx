import { cn } from '@utils'

import type {
  ModalFooterProps,
  FooterLayout,
} from '@components/common/modal/modal.types'

const JUSTIFY_BY_LAYOUT: Record<FooterLayout, string> = {
  leftRight: 'justify-between',
  right: 'justify-end',
  center: 'justify-center',
}

const ModalFooter = ({
  left,
  right,
  layout = 'leftRight',
  className = '',
}: ModalFooterProps) => {
  const base = 'flex items-center border-t border-gray-200 p-6'

  return (
    <footer className={cn(base, JUSTIFY_BY_LAYOUT[layout], className)}>
      {layout === 'leftRight' && (
        <div className="text-sm text-gray-500">{left}</div>
      )}
      <div
        className={cn(
          'flex items-center gap-2',
          layout === 'center' && 'w-full justify-center'
        )}
      >
        {right}
      </div>
    </footer>
  )
}

export default ModalFooter
