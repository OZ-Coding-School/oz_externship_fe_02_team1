import { useQuery } from '@tanstack/react-query'

import { chatApi } from '@api'
import { chatQueryKey } from '@hooks'

export const useChatRoomsList = () => {
  return useQuery({
    queryKey: chatQueryKey.list(),
    queryFn: () => chatApi.getChatRoomList(),
  })
}
