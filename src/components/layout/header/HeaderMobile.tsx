import { Bars3Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Link } from 'react-router'

import { Logo, HeaderSideMenu, UserProfileMenu } from '@components'

interface HeaderProps {
  isLoggedin: boolean
}

export default function HeaderMobile({ isLoggedin }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex gap-2.5">
        <Bars3Icon
          width="24"
          className="cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        />
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <UserProfileMenu />

      {isMenuOpen && (
        <HeaderSideMenu
          isLoggedin={isLoggedin}
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  )
}
