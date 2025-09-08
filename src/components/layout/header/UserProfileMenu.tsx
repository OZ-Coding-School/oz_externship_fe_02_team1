import { BellIcon } from '@heroicons/react/24/outline'

import { Avatar, Text } from '@components'

export default function UserProfileMenu() {
  return (
    <div className="flex items-center justify-between">
      <BellIcon height="20" />
      <div>
        <Avatar src="none" alt="김개발" size="sm" className="mr-2" />
        <Text className="text-primary-600">김개발</Text>
      </div>
    </div>
  )
}
