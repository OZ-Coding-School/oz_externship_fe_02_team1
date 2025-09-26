import { useState } from 'react'

import { ChatRoom, ChatRoomList } from '@components'
import type { ChatRoomPreview } from '@api'

interface ChatViewProps {
  onToggle: () => void
  setTotalUnreadCount: (count: number) => void
}

export default function ChatView({
  onToggle,
  setTotalUnreadCount,
}: ChatViewProps) {
  const [selectedChat, setSelectedChat] = useState<ChatRoomPreview | null>(null)

  const handleSelectChat = (chat: ChatRoomPreview) => {
    setSelectedChat(chat)
  }

  const handleBackToList = () => {
    setSelectedChat(null)
  }

  return selectedChat ? (
    <ChatRoom
      studyGroupName={selectedChat.name}
      onToggle={onToggle}
      onBack={handleBackToList}
    />
  ) : (
    <ChatRoomList
      onToggle={onToggle}
      onSelectChat={handleSelectChat}
      setTotalUnreadCount={setTotalUnreadCount}
    />
  )
}
