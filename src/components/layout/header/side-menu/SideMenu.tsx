import {
  ArrowLeftStartOnRectangleIcon,
  BookOpenIcon,
  MegaphoneIcon,
  UserGroupIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import { AuthButtonGroup, Avatar, Button, Logo, Text } from '@components'
import { cn } from '@utils'
import { HEADER_MOBILE_NAV_LISTS } from '@constants'
import { Link, useLocation } from 'react-router'

interface HeaderSideMenuProps {
  isLoggedin: boolean
  isOpen: boolean
  onClose: () => void
}

const NAV_ICONS = [
  { name: '강의', icon: <BookOpenIcon width={18} /> },
  { name: '그룹', icon: <UserGroupIcon width={18} /> },
  { name: '공고', icon: <MegaphoneIcon width={18} /> },
  { name: '내정보', icon: <UserIcon width={18} /> },
]

export default function HeaderSideMenu({
  isLoggedin,
  isOpen,
  onClose,
}: HeaderSideMenuProps) {
  const { pathname } = useLocation()

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className={cn(
          'absolute inset-0 bg-black/50',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={onClose}
      />

      {/* Side Menu */}
      <div className="fixed top-0 left-0 flex h-full w-80 flex-col justify-between bg-white shadow-lg">
        <div>
          <header className="flex justify-between border-b border-gray-200 p-4">
            <div className="flex items-center gap-2">
              <Logo size="lg" />
              <Text className="text-primary-600 text-xl font-bold">
                StudyHub
              </Text>
            </div>
            <XMarkIcon
              width={18}
              className="cursor-pointer"
              onClick={onClose}
            />
          </header>

          <div className="flex flex-col gap-2 p-4">
            <Text
              variant="small"
              className="px-3 py-2 font-semibold text-gray-500"
            >
              메뉴
            </Text>
            <nav>
              <ul className="flex flex-col gap-2">
                {HEADER_MOBILE_NAV_LISTS.map((el) => (
                  <Link to={el.path}>
                    <Button
                      variant="ghost"
                      size="large"
                      className={cn(
                        'hover:bg-primary-50 w-full gap-3 px-3',
                        pathname.startsWith(el.path) &&
                          'text-primary-600 bg-primary-50 font-medium'
                      )}
                    >
                      {NAV_ICONS.find((icon) => el.name === icon.name)?.icon}
                      {el.name}
                    </Button>
                  </Link>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <footer className="border-t border-gray-200 p-4">
          {isLoggedin ? (
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Avatar src="none" alt="김개발" size="md" />
                <div className="flex flex-col">
                  <Text className="font-semibold">김 개발</Text>
                  <Text variant="extraSmall" className="text-gray-600">
                    kim.dev@example.com
                  </Text>
                </div>
              </div>
              <Button
                variant="secondary"
                size="large"
                className="justify-center px-4 py-2"
              >
                <ArrowLeftStartOnRectangleIcon width={18} className="h-7" />
                로그아웃
              </Button>
            </div>
          ) : (
            <AuthButtonGroup />
          )}
        </footer>
      </div>
    </div>
  )
}
