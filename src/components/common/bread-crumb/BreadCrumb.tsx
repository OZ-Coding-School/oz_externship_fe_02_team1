import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router'

interface BreadCrumbLinkItem {
  label: string
  to: string | undefined
}

interface BreadCrumbCurrentItem {
  label: string
  to?: never
}

type BreadCrumbItem = BreadCrumbLinkItem | BreadCrumbCurrentItem

interface BreadCrumbProps {
  items: BreadCrumbItem[]
}

export default function BreadCrumb({ items }: BreadCrumbProps) {
  return (
    <nav
      aria-label="breadCrumb"
      className="max-w-[854px] p-[25px] text-sm text-gray-600"
    >
      <ol className="flex">
        {items.map((item, i) => (
          <li
            key={'to' in item ? item.to : item.label}
            className="flex items-center gap-2 pl-2"
          >
            {'to' in item ? (
              <Link to={item.to as string}>{item.label}</Link>
            ) : (
              <span
                className="text-foreground font-medium text-gray-900"
                aria-current="page"
              >
                {item.label}
              </span>
            )}
            {i < items.length - 1 && (
              <ChevronRightIcon className="text-muted-foreground h-4 w-4" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
