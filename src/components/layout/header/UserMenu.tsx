import { cn } from '@utils'
import { mediaQuery } from '@constants'
import {
  UserIcon,
  ArrowLeftStartOnRectangleIcon,
} from '@heroicons/react/24/outline'
import { useMediaQuery } from 'react-responsive'

export default function UserMenu() {
  const isMobile = useMediaQuery({ query: mediaQuery.mobile })

  return (
    <>
      <button className={cn('flex items-center', !isMobile && 'px-4 py-2')}>
        <UserIcon width={isMobile ? 20 : 16} className="mr-3" />
        마이페이지
      </button>
      {!isMobile && (
        <div className="py-2">
          <div className="border border-gray-100" />
        </div>
      )}
      <button className={cn('flex items-center', !isMobile && 'px-4 py-2')}>
        <ArrowLeftStartOnRectangleIcon
          width={isMobile ? 20 : 16}
          className="mr-3"
        />
        로그아웃
      </button>
    </>
  )
}
