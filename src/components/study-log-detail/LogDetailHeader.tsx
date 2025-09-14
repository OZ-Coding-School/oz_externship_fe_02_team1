import { BREAD_CRUMB_PATH } from '@/constants'
import { BreadCrumb, Button, H3, Text } from '../common'

export default function LogDetailHeader() {
  const studyLogData = {
    title: 'React Hooks 실습 정리',
    userImage: 'https://placehold.co/32x32',
    userName: '김개발',
    createdAt: '작성일: 2024. 02. 16. 오전 05:30',
  }

  return (
    <header className="w-full max-w-4xl">
      <BreadCrumb items={BREAD_CRUMB_PATH} className="mb-4" />
      <div className="flex w-full flex-col p-6">
        <div className="mb-4 flex w-full flex-col justify-between sm:flex-row">
          <H3 className="text-gray-900">{studyLogData.title}</H3>
          <div>
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
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-8 w-8 max-w-8">
            <img src={studyLogData.userImage} alt={studyLogData.userName} />
          </div>
          <Text variant="small" className="ml-2 font-medium text-gray-600">
            {studyLogData.userName}
          </Text>
          <Text variant="small" className="ml-4 font-normal text-gray-600">
            •
          </Text>
          <Text variant="small" className="ml-4 text-gray-600">
            {studyLogData.createdAt}
          </Text>
          <Text>.</Text>
        </div>
      </div>
    </header>
  )
}
