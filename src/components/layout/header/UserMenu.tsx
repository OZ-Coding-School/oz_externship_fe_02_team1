import {
  UserIcon,
  ArrowLeftStartOnRectangleIcon,
} from '@heroicons/react/24/outline'

import { Button } from '@components'

export default function UserMenu() {
  return (
    <>
      <Button variant="ghost" className="gap-3 py-2">
        <UserIcon width={14} />
        마이페이지
      </Button>
      <div className="py-1">
        <div className="border border-gray-100" />
      </div>
      <Button variant="ghost" className="text-danger-600 gap-3 py-2">
        <ArrowLeftStartOnRectangleIcon width={14} className="text-danger-600" />
        로그아웃
      </Button>
    </>
  )
}
