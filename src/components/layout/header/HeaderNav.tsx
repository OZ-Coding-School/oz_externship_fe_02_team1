import { cn } from '@/utils'
import { HEADER_NAV_LISTS } from '@constants'

interface HeaderNavProps {
  flexDirection?: 'col' | 'row'
}

export default function HeaderNav({ flexDirection }: HeaderNavProps) {
  return (
    <nav>
      <ul className={cn('flex gap-8', flexDirection === 'col' && 'flex-col')}>
        {HEADER_NAV_LISTS.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </nav>
  )
}
