import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline'

import { AuthButtonGroup, Avatar, Button, Text } from '@components'

interface SideMenuFooterProps {
  isLoggedin: boolean
}

export default function SideMenuFooter({ isLoggedin }: SideMenuFooterProps) {
  return (
    <footer className="border-t border-gray-200 p-4">
      {isLoggedin ? (
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Avatar src="none" alt="김개발" size="md" />
            <div className="flex flex-col">
              <Text className="font-semibold">김 개발</Text>
              <Text variant="extraSmall" className="text-gray-600">
                kim.dev@example.com
              </Text>
            </div>
          </div>
          <Button
            variant="secondary"
            size="large"
            className="justify-center px-4 py-2"
          >
            <ArrowLeftStartOnRectangleIcon width={18} className="h-7" />
            로그아웃
          </Button>
        </div>
      ) : (
        <AuthButtonGroup />
      )}
    </footer>
  )
}
