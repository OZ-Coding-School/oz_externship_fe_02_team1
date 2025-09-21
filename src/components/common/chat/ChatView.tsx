import { useState } from 'react'

import { ChatRoom, ChatRoomList } from '@components'
import type { ChatPreview } from '@models'

interface ChatViewProps {
  totalUnreadCount: number
  onToggle: () => void
}

export default function ChatView({
  totalUnreadCount,
  onToggle,
}: ChatViewProps) {
  const [selectedChat, setSelectedChat] = useState<ChatPreview | null>(null)

  const handleSelectChat = (chat: ChatPreview) => {
    setSelectedChat(chat)
  }

  const handleBackToList = () => {
    setSelectedChat(null)
  }

  return selectedChat ? (
    <ChatRoom
      studyGroupName={selectedChat.studyGroupName}
      onToggle={onToggle}
      onBack={handleBackToList}
    />
  ) : (
    <ChatRoomList
      totalUnreadCount={totalUnreadCount}
      onToggle={onToggle}
      onSelectChat={handleSelectChat}
    />
  )
}
