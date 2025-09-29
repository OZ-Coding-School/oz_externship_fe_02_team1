import { BreadCrumb, H2, Text } from '@components'
import { BREAD_CRUMB_PATH } from '@constants'

type StudyLogHeaderProps = {
  mode: 'create' | 'edit'
}

const title = {
  create: '스터디 기록 작성',
  edit: '스터디 기록 수정',
}

const description = {
  create: '학습한 내용을 자세히 기록해보세요',
  edit: '수정할 내용을 입력해주세요',
}

export default function StudyLogHeader({ mode }: StudyLogHeaderProps) {
  return (
    <header className="p-2 sm:p-0">
      <BreadCrumb items={BREAD_CRUMB_PATH} className="pb-6 sm:pb-4" />
      <div className="w-full pb-4 sm:pb-6">
        <H2 className="leading-9 font-bold">{title[mode]}</H2>
        <Text className="inline-flex pt-2 text-gray-600">
          {description[mode]}
        </Text>
      </div>
    </header>
  )
}
