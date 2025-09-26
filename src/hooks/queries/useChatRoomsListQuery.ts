import { useQuery } from '@tanstack/react-query'

import { chatApi } from '@api'
import { chatQueryKey } from '@hooks'
import { useAuthStore } from '@store'

export const useChatRoomsListQeury = () => {
  const { isLoggedIn } = useAuthStore()

  return useQuery({
    queryKey: chatQueryKey.list(),
    queryFn: () => chatApi.getChatRoomList(),
    enabled: !!isLoggedIn,
  })
}
