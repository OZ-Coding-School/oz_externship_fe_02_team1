import { BreadCrumb, H2, Text } from '@components'
import { BREAD_CRUMB_PATH } from '@constants'

export default function CreateStudyLogHeader() {
  return (
    <div>
      <BreadCrumb items={BREAD_CRUMB_PATH} className="pb-4" />
      <header className="w-full pb-6">
        <H2 className="leading-9 font-bold text-gray-900">스터디 기록 작성</H2>
        <Text className="inline-flex pt-2 text-gray-600">
          학습한 내용을 자세히 기록해보세요
        </Text>
      </header>
    </div>
  )
}
