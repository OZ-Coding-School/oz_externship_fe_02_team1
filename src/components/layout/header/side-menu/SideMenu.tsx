import { SideMenuFooter, SideMenuHeader, SideMenuNav, Text } from '@components'
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
      <div className="fixed top-0 left-0 flex h-full w-80 flex-col justify-between bg-white shadow-lg">
        <div>
          <SideMenuHeader onClose={onClose} />

          <div className="flex flex-col gap-2 p-4">
            <Text
              variant="small"
              className="px-3 py-2 font-semibold text-gray-500"
            >
              메뉴
            </Text>
            <SideMenuNav />
          </div>
        </div>

        <SideMenuFooter isLoggedin={isLoggedin} />
      </div>
    </div>
  )
}
