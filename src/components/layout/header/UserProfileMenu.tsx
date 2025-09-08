import { BellIcon } from '@heroicons/react/24/outline'
import { useMediaQuery } from 'react-responsive'

import { Avatar, Text } from '@components'
import { mediaQuery } from '@constants'
import { cn } from '@utils'

export default function UserProfileMenu() {
  const isMobile = useMediaQuery({ query: mediaQuery.mobile })

  return (
    <div className="flex items-center justify-between">
      <BellIcon height="20" className={cn(!isMobile && 'mx-4')} />
      <div>
        <Avatar src="none" alt="김개발" size="sm" className="mr-2" />
        <Text className="text-primary-600">김개발</Text>
      </div>
    </div>
  )
}
