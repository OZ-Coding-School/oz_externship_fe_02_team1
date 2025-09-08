import { HEADER_NAV_LISTS } from '@constants'

export default function HeaderNav() {
  return (
    <nav>
      <ul className="flex gap-8">
        {HEADER_NAV_LISTS.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </nav>
  )
}
