import { Avatar, H3, Text } from '@components'
import { formatDate } from '@utils'

import type { StudyLogDetailResponse } from '@/api'

interface LogDetailHeaderProps {
  studyLogData: StudyLogDetailResponse
  onEdit: () => void
  onDelete: () => void
}

export default function LogDetailHeader({
  studyLogData,
  onEdit,
  onDelete,
}: LogDetailHeaderProps) {
  const { title, author, createdAt, updatedAt } = studyLogData

  const showUpdatedAt = createdAt !== updatedAt

  return (
    <header className="flex w-full max-w-4xl flex-col gap-10 rounded-t-xl border border-b-0 border-gray-200 p-4 sm:gap-6 sm:p-6">
      <section className="flex w-full flex-col justify-between gap-4 wrap-normal sm:flex-row">
        <H3 className="pb-8 text-xl wrap-anywhere sm:pb-0 sm:text-2xl">
          {title}
        </H3>
        <div className="flex justify-between gap-2 sm:justify-end">
          <button
            className="max-h-10 min-w-20 cursor-pointer rounded-lg bg-gray-100 px-3 py-1.5 hover:scale-105"
            onClick={onEdit}
          >
            <Text variant="small" className="font-medium text-gray-700">
              수정하기
            </Text>
          </button>
          <button
            className="max-h-10 min-w-20 cursor-pointer rounded-lg bg-red-100 px-3 py-1.5 hover:scale-105"
            onClick={onDelete}
          >
            <Text variant="small" className="font-medium text-red-700">
              삭제하기
            </Text>
          </button>
        </div>
      </section>

      <section className="flex flex-col items-center gap-1 sm:flex-row sm:gap-4">
        <div className="flex items-center gap-2">
          <Avatar
            size="sm"
            src={author.profileImgUrl ?? undefined}
            alt={author.nickname}
          />
          <Text variant="small" className="font-medium text-gray-600">
            {author.nickname}
          </Text>
        </div>
        <Text variant="small" className="font-normal text-gray-600">
          •
        </Text>
        <Text variant="small" className="text-gray-600">
          작성일: {formatDate(new Date(createdAt))}
        </Text>
        {showUpdatedAt && (
          <>
            <Text variant="small" className="font-normal text-gray-600">
              •
            </Text>
            <Text variant="small" className="text-gray-600">
              수정일: {formatDate(new Date(updatedAt))}
            </Text>
          </>
        )}
      </section>
    </header>
  )
}
