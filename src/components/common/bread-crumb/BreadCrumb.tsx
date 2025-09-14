import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router'

import { cn } from '@/utils'

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
  className?: string
}

export default function BreadCrumb({ items, className }: BreadCrumbProps) {
  return (
    <nav
      aria-label="breadCrumb"
      className={cn('max-w-[854px] text-sm text-gray-600', className)}
    >
      <ol className="flex">
        {items.map((item, i) => (
          <li
            key={'to' in item ? item.to : item.label}
            className={cn('flex items-center gap-2', i !== 0 && 'pl-2')}
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
