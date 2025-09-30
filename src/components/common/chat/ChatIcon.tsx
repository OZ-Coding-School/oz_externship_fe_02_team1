import { ChatBubbleOvalLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import { ChatAlertCount, ChatView } from '@components'
import { mediaQuery } from '@constants'
import { cn } from '@utils'

export default function ChatIcon() {
  const isMobile = useMediaQuery({ query: mediaQuery.mobile })
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false)
  const [totalUnreadCount, setTotalUnreadCount] = useState(0)

  const handleToggleChat = () => {
    setIsChatOpen((prev) => !prev)
  }

  return (
    <>
      <button
        type="button"
        onClick={handleToggleChat}
        aria-label={isChatOpen ? '채팅 닫기' : '채팅 열기'}
        className={cn(
          'bg-primary-500 fixed flex h-12 w-12 cursor-pointer items-center justify-center rounded-full shadow-md sm:h-16 sm:w-16',
          isMobile ? 'right-4 bottom-4' : 'right-6 bottom-6'
        )}
      >
        {isChatOpen ? (
          <XMarkIcon width={24} color="white" strokeWidth={2.5} />
        ) : (
          <>
            <ChatBubbleOvalLeftIcon width={24} color="white" strokeWidth={2} />
            {totalUnreadCount !== undefined && totalUnreadCount > 0 && (
              <div aria-live="polite" aria-atomic="true">
                <ChatAlertCount unreadCount={totalUnreadCount} isTotalCount />
              </div>
            )}
          </>
        )}
      </button>

      {isChatOpen && (
        <ChatView
          onToggle={handleToggleChat}
          setTotalUnreadCount={setTotalUnreadCount}
        />
      )}
    </>
  )
}
