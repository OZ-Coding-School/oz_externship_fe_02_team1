import { ChatBubbleOvalLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import { ChatAlertCount, ChatRoomList } from '@components'
import { mediaQuery } from '@constants'
import { dummyChatList } from '@mocks/chatMocks'
import { cn } from '@utils'

export default function ChatIcon() {
  const isMobile = useMediaQuery({ query: mediaQuery.mobile })
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false)

  const totalUnreadCount = dummyChatList.reduce(
    (sum, chat) => sum + chat.unreadCount,
    0
  )

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
          'bg-primary-500 fixed flex h-16 w-16 cursor-pointer items-center justify-center rounded-full shadow-md',
          isMobile ? 'right-4 bottom-4' : 'right-6 bottom-6'
        )}
      >
        {isChatOpen ? (
          <XMarkIcon width={24} color="white" strokeWidth={2.5} />
        ) : (
          <>
            <ChatBubbleOvalLeftIcon width={24} color="white" strokeWidth={2} />
            {totalUnreadCount > 0 && (
              <div aria-live="polite" aria-atomic="true">
                <ChatAlertCount unreadCount={totalUnreadCount} isTotalCount />
              </div>
            )}
          </>
        )}
      </button>

      {isChatOpen && (
        <ChatRoomList
          totalUnreadCount={totalUnreadCount}
          onToggle={handleToggleChat}
        />
      )}
    </>
  )
}
