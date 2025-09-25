import { PaperClipIcon, PencilIcon } from '@heroicons/react/24/outline'

import { Avatar, Button, Card, EmptyState, Text } from '@components'
import { formatDate } from '@utils'

import type { StudyGroupMemberList, StudyLogListItem } from '@models'
import { usePageNav } from '@/hooks'

interface StudyGroupLogListProps {
  member: StudyGroupMemberList[]
  studyLog: StudyLogListItem[]
}

export default function StudyGroupLogList({
  member,
  studyLog,
}: StudyGroupLogListProps) {
  const { navigateToLogCreate } = usePageNav()

  return (
    <Card
      title="스터디 기록"
      titleClassName="text-xl mt-1.5 mb-2"
      cardClassName="flex gap-4"
    >
      {studyLog.length > 0 && (
        <Button
          className="absolute right-6 px-4 py-2"
          size="large"
          onClick={navigateToLogCreate}
        >
          <PencilIcon width={16} />
          작성하기
        </Button>
      )}

      {studyLog.length === 0 ? (
        <EmptyState
          title="아직 스터디 기록이 없습니다"
          description="첫 번째 기록을 추가해보세요"
          createLabel="작성하기"
          onCreate={navigateToLogCreate}
        />
      ) : (
        <>
          {studyLog.map((log) => {
            const author = member.find(
              (el) => el.nickname === log.author.nickname
            )

            return (
              <Card key={log.id} title={log.title} cardClassName="p-4">
                <Text className="absolute right-4 mb-3 text-sm text-gray-500">
                  {formatDate(new Date(log.createdAt))}
                </Text>

                <div className="flex gap-3">
                  <Avatar alt={author?.nickname || ''} />
                  <div>
                    <Text className="text-sm font-medium text-gray-700">
                      {author?.nickname}
                    </Text>
                    <div className="flex gap-1 text-gray-500">
                      <PaperClipIcon width={12} />
                      {/* <Text className="text-xs font-medium">
                    첨부파일 {log.attachments?.length} 개
                  </Text> */}
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </>
      )}
    </Card>
  )
}
