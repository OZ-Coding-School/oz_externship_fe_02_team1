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

export interface WsMessage<T> {
  type: 'send_message' | 'mark_read' | 'chat_message' | 'user_event'
  data: T
}

// WS: 클라이언트 → 서버
export interface SendMessagePayload {
  content: string
}

export interface MarkReagPayload {
  lastMessageId: number
}

// WS: 서버 → 클라이언트
export interface ChatMessagePayload extends ChatMessage {}

export interface UserEventPayload {
  event: 'join' | 'leave'
  nickname: string
}
