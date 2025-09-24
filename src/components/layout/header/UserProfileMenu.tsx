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

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  return (
    <div
      className={cn(
        'flex items-center justify-between',
        isMobile ? 'gap-2' : 'gap-4'
      )}
    >
      <BellIcon height="40" className="cursor-pointer p-2.5" />
      <div className={cn('flex items-center', isMobile ? 'gap-1' : 'gap-2')}>
        <Avatar src="none" alt="김개발" size="sm" />
        <Text className="text-primary-600">김개발</Text>
        {!isMobile && (
          <div>
            <button
              type="button"
              className="w-8 cursor-pointer p-2"
              onClick={() => handleToggleDropdown()}
            >
              {isDropdownOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>

            <UserDropdown isOpen={isDropdownOpen} />
          </div>
        )}
      </div>
    </div>
  )
}
