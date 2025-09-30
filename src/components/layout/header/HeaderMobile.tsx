import { Bars3Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Link } from 'react-router'

import { Logo, SideMenu, UserProfileMenu } from '@components'
import { useAuthStore } from '@store'

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const { isLoggedIn } = useAuthStore()

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

      {isLoggedIn && <UserProfileMenu />}

      {isMenuOpen && (
        <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      )}
    </div>
  )
}
