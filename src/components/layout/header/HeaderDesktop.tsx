import { Link } from 'react-router'

import {
  Text,
  Logo,
  HeaderNav,
  AuthButtonGroup,
  UserProfileMenu,
} from '@components'

interface HeaderDesktopProp {
  isLoggedin: boolean
}

export default function HeaderDesktop({ isLoggedin }: HeaderDesktopProp) {
  return (
    <div className="flex w-full max-w-7xl justify-between px-8">
      <Link to="/" className="flex items-center gap-2">
        <Logo />
        <Text className="text-primary-600 text-xl font-bold">StudyHub</Text>
      </Link>

      <div className="flex items-center gap-4">
        <HeaderNav />

        {isLoggedin ? <UserProfileMenu /> : <AuthButtonGroup />}
      </div>
    </div>
  )
}
