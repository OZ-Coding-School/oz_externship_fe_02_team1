import { useState } from 'react'

import { ChatRoom, ChatRoomList } from '@components'

import type { ChatRoomPreview, ChatRoomsResponse } from '@api'

interface ChatViewProps {
  totalUnreadCount: number | undefined
  isLoading: boolean
  chatRoomList: ChatRoomsResponse | undefined
  onToggle: () => void
}

export default function ChatView({
  totalUnreadCount,
  isLoading,
  chatRoomList,
  onToggle,
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
      totalUnreadCount={totalUnreadCount}
      isLoading={isLoading}
      onToggle={onToggle}
      chatRoomList={chatRoomList}
      onSelectChat={handleSelectChat}
    />
  )
}
