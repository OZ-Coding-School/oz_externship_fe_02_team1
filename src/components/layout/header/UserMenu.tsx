import {
  UserIcon,
  ArrowLeftStartOnRectangleIcon,
} from '@heroicons/react/24/outline'
import { useMediaQuery } from 'react-responsive'

import { UserMenuButton } from '@components'
import { mediaQuery } from '@constants'

export default function UserMenu() {
  const isMobile = useMediaQuery({ query: mediaQuery.mobile })

  return (
    <>
      <UserMenuButton
        icon={<UserIcon width={isMobile ? 20 : 16} />}
        label="마이페이지"
        isMobile={isMobile}
      />
      {!isMobile && (
        <div className="py-2">
          <div className="border border-gray-100" />
        </div>
      )}
      <UserMenuButton
        icon={<ArrowLeftStartOnRectangleIcon width={isMobile ? 20 : 16} />}
        label="로그아웃"
        isMobile={isMobile}
      />
    </>
  )
}
