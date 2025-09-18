import type { Member } from '@models'

export interface LastMessage {
  sender_nickname: string
  content: string
  created_at: string
}

export interface ChatPreview {
  study_group_uuid: string
  study_group_name: string
  last_message: LastMessage | null
  unread_count: number
}

export type ChatList = ChatPreview[]

export interface ChatMessage {
  message_id: number
  sender: Member
  content: string
  created_at: string
}

export interface ChatMessageResponse {
  next_cursor?: string | null
  result: ChatMessage[]
}
