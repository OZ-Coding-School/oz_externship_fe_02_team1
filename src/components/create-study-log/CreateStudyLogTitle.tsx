import { useState } from 'react'

import { Input, Text } from '@components'
import { MAX_TITLE_LENGTH } from '@constants'

export default function CreateStudyLogTitle() {
  const [title, setTitle] = useState('')

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const NewTitle = e.target.value
    if (NewTitle.length <= 100) {
      setTitle(NewTitle)
    }
  }

  return (
    <div className="w-full">
      <div className="pb-2">
        <Text className="text-sm font-medium text-gray-700">제목 </Text>
        <Text className="text-sm font-medium text-red-500">*</Text>
      </div>
      <Input
        maxLength={100}
        value={title}
        placeholder="스터디 기록의 제목을 입력하세요"
        className="w-full rounded-lg px-3 py-2"
        onChange={handleTitleChange}
      />
      <Text variant="small" className="pt-1 font-normal text-gray-500">
        {title.length}/{MAX_TITLE_LENGTH}자
      </Text>
    </div>
  )
}
