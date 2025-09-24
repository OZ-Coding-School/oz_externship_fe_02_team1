import { Input, Text } from '@components'
import { MAX_TITLE_LENGTH } from '@constants'

interface StudyLogTitleProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function StudyLogTitle({ value, onChange }: StudyLogTitleProps) {
  return (
    <div className="w-full">
      <div className="pb-2">
        <Text className="text-sm font-medium text-gray-700">제목 </Text>
        <Text className="text-sm font-medium text-red-500">*</Text>
      </div>
      <Input
        maxLength={100}
        value={value}
        placeholder="스터디 기록의 제목을 입력하세요"
        className="w-full rounded-lg px-3 py-2"
        onChange={onChange}
      />
      <Text variant="small" className="pt-1 font-normal text-gray-500">
        {value.length}/{MAX_TITLE_LENGTH}자
      </Text>
    </div>
  )
}
