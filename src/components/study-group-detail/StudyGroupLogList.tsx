import type { StudyGroup } from '@models'
import { Avatar, Card, Text } from '@components'
import { PaperClipIcon } from '@heroicons/react/24/outline'
import { formatDate } from '@utils'

export default function StudyGroupLogList({
  member,
  studyLog,
}: Pick<StudyGroup, 'member' | 'studyLog'>) {
  return (
    <>
      <Card
        title="스터디 기록"
        titleClassName=" text-xl "
        cardClassName="flex gap-4"
      >
        {studyLog?.map((log) => {
          const author = member.find((el) => el.id === log.authorId)

          return (
            <Card key={log.id} title={log.title} cardClassName="p-[17px]">
              <Text className="absolute right-[17px] mb-3 text-sm text-gray-500">
                {formatDate(log.date)}
              </Text>

              <div className="flex gap-3">
                <Avatar alt={author?.name || ''} />
                <div>
                  <Text className="text-sm font-medium text-gray-700">
                    {author?.name}
                  </Text>
                  <div className="flex gap-1">
                    <PaperClipIcon width={12} className="text-gray-500" />
                    <Text className="text-xs font-medium text-gray-500">
                      첨부파일 {log.attachment?.length} 개
                    </Text>
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </Card>
    </>
  )
}
