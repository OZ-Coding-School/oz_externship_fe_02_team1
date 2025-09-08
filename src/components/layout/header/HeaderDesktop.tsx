import { Avatar, Button, Text, Logo } from '@components'
import { Link } from 'react-router'
import { BellIcon } from '@heroicons/react/24/outline'
import { HEADER_NAV_LISTS } from '@constants'

interface HeaderDesktopProps {
  isLoggedin: boolean
}

export default function HeaderDesktop({ isLoggedin }: HeaderDesktopProps) {
  return (
    <div className="flex w-full max-w-7xl justify-between px-8">
      <Link to="/" className="flex items-center gap-2">
        <Logo />
        <Text className="text-primary-600 text-xl font-bold">StudyHub</Text>
      </Link>
      <div className="flex items-center">
        <nav>
          <ul className="flex gap-8">
            {HEADER_NAV_LISTS.map((el) => (
              <li>{el}</li>
            ))}
          </ul>
        </nav>
        {isLoggedin ? (
          <div className="ml-8 flex items-center">
            <BellIcon height="20" />
            <Avatar src="none" alt="김개발" size="sm" className="mr-2 ml-4" />
            <Text className="text-primary-600">김개발</Text>
          </div>
        ) : (
          <>
            <Button variant="ghost" className="text-base">
              로그인
            </Button>
            <Button className="ml-0 text-base">회원가입</Button>
          </>
        )}
      </div>
    </div>
  )
}
