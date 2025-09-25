import { Link } from 'react-router'

import {
  Text,
  Logo,
  HeaderNav,
  AuthButtonGroup,
  UserProfileMenu,
} from '@components'
import { useAuthStore } from '@store'

export default function HeaderDesktop() {
  const { isLoggedIn } = useAuthStore()

  return (
    <div className="flex w-full max-w-7xl justify-between px-8">
      <Link to="/" className="flex items-center gap-2">
        <Logo />
        <Text className="text-primary-600 text-xl font-bold">StudyHub</Text>
      </Link>

      <div className="flex items-center gap-8">
        <HeaderNav />

        {isLoggedIn ? <UserProfileMenu /> : <AuthButtonGroup />}
      </div>
    </div>
  )
}
