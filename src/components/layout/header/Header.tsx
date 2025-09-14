import { useMediaQuery } from 'react-responsive'

import { HeaderDesktop, HeaderMobile } from '@components'
import { mediaQuery } from '@constants'

interface HeaderProps {
  isLoggedin: boolean
}

export default function Header({ isLoggedin }: HeaderProps) {
  const isMobile = useMediaQuery({ query: mediaQuery.mobile })

  return (
    <header className="fixed z-50 h-16 w-full border-b border-gray-200 bg-white px-4 sm:px-20">
      <div className="m-auto flex h-full max-w-7xl items-center">
        {isMobile ? (
          <HeaderMobile isLoggedin={isLoggedin} />
        ) : (
          <HeaderDesktop isLoggedin={isLoggedin} />
        )}
      </div>
    </header>
  )
}
