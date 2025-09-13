import { PaperClipIcon, PencilIcon } from '@heroicons/react/24/outline'

import { Avatar, Button, Card, Text } from '@components'
import { formatDate } from '@utils'

import type { StudyGroup } from '@models'

export default function StudyGroupLogList({
  member,
  studyLog,
}: Pick<StudyGroup, 'member' | 'studyLog'>) {
  return (
    <Card
      title="스터디 기록"
      titleClassName="text-xl mt-1.5 mb-2"
      cardClassName="flex gap-4"
    >
      <Button className="absolute right-6 px-4 py-2" size="large">
        <PencilIcon width={16} />
        작성하기
      </Button>

      {studyLog?.map((log) => {
        const author = member.find((el) => el.id === log.authorId)

        return (
          <Card key={log.id} title={log.title} cardClassName="p-4">
            <Text className="absolute right-4 mb-3 text-sm text-gray-500">
              {formatDate(log.date)}
            </Text>

            <div className="flex gap-3">
              <Avatar alt={author?.name || ''} />
              <div>
                <Text className="text-sm font-medium text-gray-700">
                  {author?.name}
                </Text>
                <div className="flex gap-1 text-gray-500">
                  <PaperClipIcon width={12} />
                  <Text className="text-xs font-medium">
                    첨부파일 {log.attachment?.length} 개
                  </Text>
                </div>
              </div>
            </div>
          </Card>
        )
      })}
    </Card>
  )
}
