import { UserMenu } from '@components'

interface UserDropdownProps {
  isOpen: boolean
}

export default function UserDropdown({ isOpen }: UserDropdownProps) {
  if (!isOpen) return null

  return (
    <div className="absolute top-14 right-28 flex w-48 flex-col rounded-lg border border-gray-200 bg-white py-2 shadow-md">
      <UserMenu />
    </div>
  )
}
