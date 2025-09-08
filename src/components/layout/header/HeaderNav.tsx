import { useMediaQuery } from 'react-responsive'

import { HEADER_NAV_LISTS, mediaQuery } from '@constants'
import { cn } from '@utils'

export default function HeaderNav() {
  const isMobile = useMediaQuery({ query: mediaQuery.mobile })

  return (
    <nav>
      <ul className={cn('flex gap-8', isMobile && 'flex-col')}>
        {HEADER_NAV_LISTS.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </nav>
  )
}
