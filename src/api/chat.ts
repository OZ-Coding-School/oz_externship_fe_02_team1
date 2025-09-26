import { API_PATHS } from '@constants'
import { axiosInstance } from '@lib'

import type { ChatRoomsResponse } from './types'

export const chatApi = {
  getChatRoomList: async () => {
    const response = await axiosInstance.get<ChatRoomsResponse>(
      API_PATHS.CHAT.ROOMS
    )
    return response.data
  },
}
