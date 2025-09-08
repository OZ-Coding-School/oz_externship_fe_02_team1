import {
  BellIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'
import { useMediaQuery } from 'react-responsive'

import { Avatar, Text, UserMenu } from '@components'
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
            <UserMenu />
          </div>
        )}
      </div>
    </div>
  )
}
