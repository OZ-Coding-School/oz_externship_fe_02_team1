import { BREAD_CRUMB_PATH } from '@/constants'
import { BreadCrumb, Button, H3, Text } from '@components'
import { formatDate } from '@utils'

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
    <header className="w-full max-w-4xl">
      <BreadCrumb items={BREAD_CRUMB_PATH} className="mb-4" />
      <div className="flex w-full flex-col p-6">
        <section className="mb-4 flex w-full flex-col justify-between sm:flex-row">
          <H3 className="text-gray-900">{studyLogData.title}</H3>
          <div className="flex">
            <Button className="rounded-lg bg-gray-100 px-3 py-1.5">
              <Text variant="small" className="font-medium text-gray-700">
                수정하기
              </Text>
            </Button>
            <Button className="ml-2 rounded-lg bg-red-100 px-3 py-1.5">
              <Text variant="small" className="font-medium text-red-700">
                삭제하기
              </Text>
            </Button>
          </div>
        </section>

        <section className="flex items-center">
          <img
            src={studyLogData.userImage}
            alt={studyLogData.userName}
            className="h-8 w-8 rounded-full"
          />
          <Text variant="small" className="ml-2 font-medium text-gray-600">
            {studyLogData.userName}
          </Text>
          <Text variant="small" className="ml-4 font-normal text-gray-600">
            •
          </Text>
          <Text variant="small" className="ml-4 text-gray-600">
            {formatDate(new Date(studyLogData.createdAt))}
          </Text>
          <Text>.</Text>
        </section>
      </div>
    </header>
  )
}
