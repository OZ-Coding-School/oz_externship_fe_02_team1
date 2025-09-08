import {
  BellIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  UserIcon,
  ArrowLeftStartOnRectangleIcon,
} from '@heroicons/react/24/outline'
import { useMediaQuery } from 'react-responsive'

import { Avatar, Text } from '@components'
import { mediaQuery } from '@constants'
import { cn } from '@utils'
import { useState } from 'react'

export default function UserProfileMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const isMobile = useMediaQuery({ query: mediaQuery.mobile })

  return (
    <div className="flex items-center justify-between">
      <BellIcon height="20" className={cn(!isMobile && 'mx-4')} />
      <div className="flex items-center">
        <Avatar src="none" alt="김개발" size="sm" className="mr-2" />
        <Text className="text-primary-600">김개발</Text>
        {!isMobile && (
          <button
            type="button"
            className="w-8 cursor-pointer p-2"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            {isDropdownOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </button>
        )}

        {isDropdownOpen && (
          <div className="absolute top-[56.047px] right-[112px] flex w-48 flex-col rounded-lg border border-gray-200 bg-white py-2 shadow-md">
            <button className="flex cursor-pointer items-center px-4 py-2 hover:underline">
              <UserIcon width={16} className="mr-3" />
              마이페이지
            </button>
            <div className="py-2">
              <div className="border border-gray-100" />
            </div>
            <button className="flex cursor-pointer items-center px-4 py-2 hover:underline">
              <ArrowLeftStartOnRectangleIcon width={16} className="mr-3" />
              로그아웃
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
