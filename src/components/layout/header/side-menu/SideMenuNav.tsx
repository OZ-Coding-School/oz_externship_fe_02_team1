import {
  BookOpenIcon,
  MegaphoneIcon,
  UserGroupIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { HEADER_MOBILE_NAV_LISTS } from '@constants'
import { Link, useLocation } from 'react-router'
import { Button } from '@components'
import { cn } from '@utils'

const NAV_ICONS = [
  { name: '강의', icon: <BookOpenIcon width={18} /> },
  { name: '그룹', icon: <UserGroupIcon width={18} /> },
  { name: '공고', icon: <MegaphoneIcon width={18} /> },
  { name: '내정보', icon: <UserIcon width={18} /> },
]

export default function SideMenuNav() {
  const { pathname } = useLocation()

  return (
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
  )
}
