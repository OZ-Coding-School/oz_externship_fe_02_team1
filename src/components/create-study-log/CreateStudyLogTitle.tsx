import { useState } from 'react'

import { Input, Text } from '@components'

export default function CreateStudyLogTitle() {
  const [title, setTitle] = useState('')

  return (
    <div className="w-full">
      <div className="pb-2">
        <Text className="text-sm font-medium text-gray-700">제목 </Text>
        <Text className="text-sm font-medium text-red-500">*</Text>
      </div>
      <Input
        maxLength={99}
        value={title}
        placeholder="스터디 기록의 제목을 입력하세요"
        className="w-full rounded-lg px-3 py-2"
        onChange={(e) => setTitle(e.target.value)}
      />
      <Text variant="small" className="pt-1 font-normal text-gray-500">
        {title.length}/100자
      </Text>
    </div>
  )
}
