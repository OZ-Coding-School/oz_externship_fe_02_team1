import {
  BellIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import { Avatar, Text, UserDropdown } from '@components'
import { mediaQuery } from '@constants'
import { cn } from '@utils'

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
          <>
            <button
              type="button"
              className="w-8 cursor-pointer p-2"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              {isDropdownOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>

            <UserDropdown isOpen={isDropdownOpen} />
          </>
        )}
      </div>
    </div>
  )
}
