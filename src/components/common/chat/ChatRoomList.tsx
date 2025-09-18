import { ChatAlertCount, Text } from '@components'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface ChatRoomListProps {
  onToggle: () => void
}

export default function ChatRoomList({ onToggle }: ChatRoomListProps) {
  return (
    <div className="fixed right-6 bottom-24 z-9999 h-96 w-80 rounded-lg border border-gray-200 bg-white shadow-2xl">
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 p-4">
        <div className="flex flex-col items-start">
          <Text className="font-semibold text-gray-900">채팅방</Text>
          <Text variant="extraSmall" className="text-primary-600">
            3개의 읽지 않은 메시지
          </Text>
        </div>
        <XMarkIcon
          width={18}
          onClick={onToggle}
          className="cursor-pointer text-gray-400"
        />
      </div>

      <div className="h-77 overflow-x-hidden overflow-y-scroll">
        <div className="flex flex-col gap-1 border-b border-gray-200 p-3">
          <div className="flex items-center justify-between">
            <Text variant="small" className="font-medium text-gray-900">
              React 실무 프로젝트 스터디
            </Text>
            <div className="flex items-center gap-1">
              <Text variant="extraSmall" className="text-gray-500">
                1월 15일
              </Text>
              <ChatAlertCount alertCount={2} />
            </div>
          </div>
          <Text variant="extraSmall" className="text-gray-600">
            김개발: 내일 미팅 시간 변경 가능하신가요?
          </Text>
          <Text variant="extraSmall" className="text-gray-400">
            수정일시: 2024-01-15 14:30
          </Text>
        </div>

        <div className="flex flex-col gap-1 border-b border-gray-200 p-3">
          <div className="flex items-center justify-between">
            <Text variant="small" className="font-medium text-gray-900">
              React 실무 프로젝트 스터디
            </Text>
            <div className="flex items-center gap-1">
              <Text variant="extraSmall" className="text-gray-500">
                1월 15일
              </Text>
              <ChatAlertCount alertCount={2} />
            </div>
          </div>
          <Text variant="extraSmall" className="text-gray-600">
            김개발: 내일 미팅 시간 변경 가능하신가요?
          </Text>
          <Text variant="extraSmall" className="text-gray-400">
            수정일시: 2024-01-15 14:30
          </Text>
        </div>

        <div className="flex flex-col gap-1 border-b border-gray-200 p-3">
          <div className="flex items-center justify-between">
            <Text variant="small" className="font-medium text-gray-900">
              React 실무 프로젝트 스터디
            </Text>
            <div className="flex items-center gap-1">
              <Text variant="extraSmall" className="text-gray-500">
                1월 15일
              </Text>
              <ChatAlertCount alertCount={2} />
            </div>
          </div>
          <Text variant="extraSmall" className="text-gray-600">
            김개발: 내일 미팅 시간 변경 가능하신가요?
          </Text>
          <Text variant="extraSmall" className="text-gray-400">
            수정일시: 2024-01-15 14:30
          </Text>
        </div>

        <div className="flex flex-col gap-1 border-b border-gray-200 p-3">
          <div className="flex items-center justify-between">
            <Text variant="small" className="font-medium text-gray-900">
              React 실무 프로젝트 스터디
            </Text>
            <div className="flex items-center gap-1">
              <Text variant="extraSmall" className="text-gray-500">
                1월 15일
              </Text>
              <ChatAlertCount alertCount={2} />
            </div>
          </div>
          <Text variant="extraSmall" className="text-gray-600">
            김개발: 내일 미팅 시간 변경 가능하신가요?
          </Text>
          <Text variant="extraSmall" className="text-gray-400">
            수정일시: 2024-01-15 14:30
          </Text>
        </div>
      </div>
    </div>
  )
}
