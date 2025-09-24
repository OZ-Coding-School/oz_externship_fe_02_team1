import { XMarkIcon } from '@heroicons/react/24/outline'

import { Text, Logo } from '@components'

interface SideMenuHeaderProps {
  onClose: () => void
}

export default function SideMenuHeader({ onClose }: SideMenuHeaderProps) {
  return (
    <header className="flex justify-between border-b border-gray-200 p-4">
      <div className="flex items-center gap-2">
        <Logo size="lg" />
        <Text className="text-primary-600 text-xl font-bold">StudyHub</Text>
      </div>
      <XMarkIcon width={18} className="cursor-pointer" onClick={onClose} />
    </header>
  )
}
