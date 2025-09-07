import { useMediaQuery } from 'react-responsive'
import { mediaQuery } from '@constants'
import { HeaderDesktop } from '@components'

interface HeaderProps {
  isLoggedin: boolean
}

export default function Header({ isLoggedin }: HeaderProps) {
  const isMobile = useMediaQuery({ query: mediaQuery.mobile })

  return (
    <header className="flex h-16 items-center px-20">
      {isMobile ? <></> : <HeaderDesktop isLoggedin={isLoggedin} />}
    </header>
  )
}
