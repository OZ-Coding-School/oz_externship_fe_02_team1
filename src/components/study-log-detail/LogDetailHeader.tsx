import { Avatar, BreadCrumb, Button, H3, Text } from '@components'
import { formatDate } from '@utils'

import { BREAD_CRUMB_PATH } from '@constants'

interface LogDetailHeaderProps {
  studyLogData: {
    title: string
    userImage: string
    userName: string
    createdAt: string
  }
}

export default function LogDetailHeader({
  studyLogData,
}: LogDetailHeaderProps) {
  return (
    <header className="w-full max-w-4xl gap-4">
      <BreadCrumb items={BREAD_CRUMB_PATH} />
      <div className="flex w-full flex-col gap-4 p-6">
        <section className="flex w-full flex-col justify-between sm:flex-row">
          <H3 className="text-gray-900">{studyLogData.title}</H3>
          <div className="flex gap-2">
            <Button className="rounded-lg bg-gray-100 px-3 py-1.5">
              <Text variant="small" className="font-medium text-gray-700">
                수정하기
              </Text>
            </Button>
            <Button className="rounded-lg bg-red-100 px-3 py-1.5">
              <Text variant="small" className="font-medium text-red-700">
                삭제하기
              </Text>
            </Button>
          </div>
        </section>

        <section className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Avatar
              size="sm"
              src={studyLogData.userImage}
              alt={studyLogData.userName}
            />
            <Text variant="small" className="font-medium text-gray-600">
              {studyLogData.userName}
            </Text>
          </div>
          <Text variant="small" className="font-normal text-gray-600">
            •
          </Text>
          <Text variant="small" className="text-gray-600">
            {formatDate(new Date(studyLogData.createdAt))}
          </Text>
        </section>
      </div>
    </header>
  )
}
