import { Bars3Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Link } from 'react-router'

import { Logo, HeaderSideMenu } from '@components'

interface HeaderProps {
  isLoggedin: boolean
}

export default function HeaderMobile({ isLoggedin }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <>
      <Bars3Icon
        width="36"
        className="mr-2 cursor-pointer p-2"
        onClick={() => setIsMenuOpen(true)}
      />
      <Link to="/">
        <Logo />
      </Link>

      {isMenuOpen && (
        <HeaderSideMenu
          isLoggedin={isLoggedin}
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      )}
    </>
  )
}
