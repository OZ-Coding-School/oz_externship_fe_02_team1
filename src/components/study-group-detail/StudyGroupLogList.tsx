import { PencilIcon } from '@heroicons/react/24/outline'
import { Link, useParams } from 'react-router'
import { useEffect } from 'react'

import {
  Avatar,
  Button,
  Card,
  EmptyState,
  ErrorState,
  LoadingState,
  Text,
} from '@components'
import { useLogListQeury, usePageNav, useToast } from '@hooks'
import { formatDate } from '@utils'

export default function StudyGroupLogList() {
  const { navigateToLogCreate } = usePageNav()
  const { groupId } = useParams<{ groupId: string }>()
  const { toast } = useToast()

  const {
    data: logData,
    isLoading,
    isError,
    refetch,
  } = useLogListQeury(groupId || '')

  useEffect(() => {
    if (isError) {
      toast({
        title: '스터디 기록을 불러오는 데 실패했습니다.',
        message: '다시 시도해주세요.',
        type: 'error',
      })
    }
  }, [isError, toast])

  return (
    <Card
      title="스터디 기록"
      titleClassName="mt-1.5 mb-2 text-lg sm:text-xl"
      cardClassName="flex flex-col gap-4"
    >
      {!isLoading && !isError && logData && logData.length > 0 && (
        <Button
          className="absolute right-6 px-4 py-2"
          size="large"
          onClick={navigateToLogCreate}
        >
          <PencilIcon width={16} />
          작성하기
        </Button>
      )}

      {isLoading && <LoadingState />}
      {isError && (
        <div className="flex items-center justify-center py-20">
          <ErrorState onRetry={refetch} />
        </div>
      )}
      {!isLoading &&
        !isError &&
        (!logData || logData.length === 0 ? (
          <EmptyState
            title="아직 스터디 기록이 없습니다"
            description="첫 번째 기록을 추가해보세요"
            createLabel="작성하기"
            onCreate={navigateToLogCreate}
          />
        ) : (
          <div className="scrollbar-custom flex max-h-100 flex-col gap-4 overflow-y-auto">
            {logData.map((log) => (
              <Link
                key={log.id}
                to={`/study-group/${groupId}/records/${log.id}`}
              >
                <Card title={log.title} cardClassName="p-4">
                  <Text className="absolute right-4 mb-3 text-sm text-gray-500">
                    {formatDate(new Date(log.createdAt.replace(' ', 'T')))}
                  </Text>

                  <div className="flex gap-3">
                    <Avatar alt={log.author.nickname || ''} />
                    <div>
                      <Text className="text-sm font-medium text-gray-700">
                        {log.author.nickname}
                      </Text>
                      {/* <div className="flex gap-1 text-gray-500">
                      <PaperClipIcon width={12} />
                      <Text className="text-xs font-medium">
                        첨부파일 {log.attachments?.length} 개
                      </Text>
                    </div> */}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        ))}
    </Card>
  )
}
