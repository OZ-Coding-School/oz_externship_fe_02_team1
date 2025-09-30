import {
  ArrowLeftStartOnRectangleIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

import { Button } from '@components'
import { useAuthActions } from '@hooks'

interface UserDropdownProps {
  isOpen: boolean
}

export default function UserDropdown({ isOpen }: UserDropdownProps) {
  const { handleLogout } = useAuthActions()

  if (!isOpen) return null

  return (
    <div className="relative">
      <div className="absolute top-2 right-0 flex w-48 flex-col rounded-lg border border-gray-200 bg-white py-2 shadow-md">
        <div className="px-2">
          <Button variant="ghost" className="w-full gap-3 p-2">
            <UserIcon width={14} />
            마이페이지
          </Button>
        </div>
        <div className="py-1">
          <div className="border border-gray-100" />
        </div>
        <div className="px-2">
          <Button
            variant="ghost"
            className="text-danger-600 w-full gap-3 p-2"
            onClick={handleLogout}
          >
            <ArrowLeftStartOnRectangleIcon
              width={14}
              className="text-danger-600"
            />
            로그아웃
          </Button>
        </div>
      </div>
    </div>
  )
}
