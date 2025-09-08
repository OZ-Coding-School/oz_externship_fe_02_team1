import { useMediaQuery } from 'react-responsive'

import { HeaderDesktop, HeaderMobile } from '@components'
import { mediaQuery } from '@constants'

interface HeaderProps {
  isLoggedin: boolean
}

export default function Header({ isLoggedin }: HeaderProps) {
  const isMobile = useMediaQuery({ query: mediaQuery.mobile })

  return (
    <header className="fixed flex h-16 w-full items-center border-b border-gray-200 px-4 sm:px-20">
      {isMobile ? (
        <HeaderMobile isLoggedin={isLoggedin} />
      ) : (
        <HeaderDesktop isLoggedin={isLoggedin} />
      )}
    </header>
  )
}
