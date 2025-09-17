import { mediaQuery } from '@constants'
import { cn } from '@utils'
import { ChatBubbleOvalLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react'
import { ChatAlertCount } from '@components'

export default function ChatIcon() {
  const isMobile = useMediaQuery({ query: mediaQuery.mobile })
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false)
  const alertCount = 1

  const handleToggleChat = () => {
    setIsChatOpen((prev) => !prev)
  }

  return (
    <button
      type="button"
      onClick={handleToggleChat}
      className={cn(
        'bg-primary-500 fixed flex h-16 w-16 cursor-pointer items-center justify-center rounded-full shadow-md',
        isMobile ? 'right-4 bottom-4' : 'right-6 bottom-6'
      )}
    >
      {isChatOpen ? (
        <XMarkIcon width={24} color="white" strokeWidth={2.5} />
      ) : (
        <>
          <ChatBubbleOvalLeftIcon width={24} color="white" strokeWidth={2} />
          {alertCount > 0 && <ChatAlertCount alertCount={alertCount} />}
        </>
      )}
    </button>
  )
}
