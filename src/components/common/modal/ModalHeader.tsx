import { XMarkIcon } from '@heroicons/react/24/outline'

import { cn } from '@/utils'
import type { ModalHeaderProps } from '@/components/common/modal/modal.types'

const ModalHeader = ({
  title,
  subTitle,
  onClose,
  titleId = 'modal-title',
  subTitleId = 'modal-sub',
}: ModalHeaderProps) => {
  return (
    <header
      className={cn(
        'flex w-full items-start justify-between gap-4 border-b border-gray-200 p-6'
      )}
    >
      <div className="flex min-w-0 flex-col">
        <h2
          id={titleId}
          className="truncate text-xl font-semibold text-gray-900"
        >
          {title}
        </h2>
        {subTitle && (
          <p id={subTitleId} className="mt-1 text-sm text-gray-500">
            {subTitle}
          </p>
        )}
      </div>
      <button
        type="button"
        onClick={onClose}
        className="text-gray-400 hover:text-gray-900"
        aria-label="닫기"
      >
        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </header>
  )
}

export default ModalHeader
