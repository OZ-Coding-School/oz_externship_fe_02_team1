import { useMediaQuery } from 'react-responsive'
import { Link, useLocation } from 'react-router-dom'

import { HEADER_DESKTOP_NAV_LISTS, mediaQuery } from '@constants'
import { cn } from '@utils'

export default function HeaderNav() {
  const isMobile = useMediaQuery({ query: mediaQuery.mobile })
  const { pathname } = useLocation()

  return (
    <nav>
      <ul className={cn('flex gap-8', isMobile && 'flex-col')}>
        {HEADER_DESKTOP_NAV_LISTS.map((navItem) => (
          <li key={navItem.path}>
            <Link
              to={navItem.path}
              className={cn(
                'text-gray-600 hover:text-gray-900',
                pathname.startsWith(navItem.path) &&
                  'text-primary-600 hover:text-primary-600 font-medium'
              )}
            >
              {navItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
