import { XMarkIcon } from '@heroicons/react/24/outline'
import { type ReactNode } from 'react'

interface ChatContainerProps {
  header: ReactNode
  children: ReactNode
  onToggle: () => void
}

export default function ChatContainer({
  header,
  children,
  onToggle,
}: ChatContainerProps) {
  return (
    <div className="fixed right-6 bottom-24 z-9999 h-96 w-80 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-2xl">
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 p-4">
        {header}
        <XMarkIcon
          width={18}
          onClick={onToggle}
          className="cursor-pointer text-gray-400"
        />
      </div>

      {children}
    </div>
  )
}
