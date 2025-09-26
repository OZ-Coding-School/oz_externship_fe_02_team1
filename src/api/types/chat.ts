export interface LastMessage {
  id: number
  content: string
  sender: {
    uuid: string
    nickname: string
    name: string
    gender: string
  }
  created_at: string
}

export interface ChatRoomPreview {
  uuid: string
  name: string
  unreadMessageCount: number
  lastMessage: LastMessage | null
}

export type ChatRoomsResponse = ChatRoomPreview[]
