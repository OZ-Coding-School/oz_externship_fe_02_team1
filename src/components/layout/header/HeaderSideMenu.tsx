import { XMarkIcon } from '@heroicons/react/24/outline'

import {
  AuthButtonGroup,
  HeaderNav,
  UserMenu,
  UserProfileMenu,
} from '@components'
import { cn } from '@utils'

interface HeaderSideMenuProps {
  isLoggedin: boolean
  isOpen: boolean
  onClose: () => void
}

export default function HeaderSideMenu({
  isLoggedin,
  isOpen,
  onClose,
}: HeaderSideMenuProps) {
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
      <div className="fixed top-0 left-0 h-full w-60 bg-white shadow-lg">
        <div className="flex justify-end px-4 py-5">
          <XMarkIcon width="24" className="cursor-pointer" onClick={onClose} />
        </div>
        <div className="p-5">
          <HeaderNav />

          <div className="mt-8 border-t border-gray-200 pt-8">
            {isLoggedin ? (
              <>
                <div className="flex flex-col gap-8 pb-8">
                  <UserMenu />
                </div>
                <UserProfileMenu />
              </>
            ) : (
              <AuthButtonGroup onClose={onClose} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
