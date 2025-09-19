import type { Member } from '@models'

export interface LastMessage {
  senderNickname: string
  content: string
  createdAt: string
}

export interface ChatPreview {
  studyGroupUuid: string
  studyGroupName: string
  lastMessage: LastMessage | null
  unreadCount: number
}

export type ChatList = ChatPreview[]

export interface ChatMessage {
  messageId: number
  sender: Member
  content: string
  createdAt: string
}

export interface ChatMessageResponse {
  nextCursor?: string | null
  result: ChatMessage[]
}
