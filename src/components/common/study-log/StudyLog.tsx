import Input from '@components/common/form/Input'
import { Button, MarkdownEditor } from '@components'
import { H3, Text } from '@components'
import { useState } from 'react'
import { BreadCrumb } from '@components/common/bread-crumb'

export default function StudyLog() {
  const [value, setValue] = useState('Hello')

  const items = [
    { label: '홈', to: '/' },
    { label: '스터디 기록', to: '/study' },
    { label: '스터디 상세', to: '/study-detail' },
    { label: '기록 작성' },
  ]

  return (
    <div className="p-8">
      <BreadCrumb items={items} />
      <header className="pb-6">
        <H3>스터디 기록 작성</H3>
        <Text>학습한 내용을 자세히 기록해보세요</Text>
      </header>
      <section className="p-6">
        <Input label="제목" placeholder="스터디 기록의 제목을 입력하세요" />
        <span>0/100자</span>
        <MarkdownEditor value="" onChange={setValue} />
        <div>
          <Text variant="small">첨부 파일</Text>
          <div>첨부 파일 들어감</div>
        </div>
      </section>
      <footer className="flex justify-between">
        <Button variant="outline" className="rounded-lg px-6 py-2">
          <Text variant="base" className="font-medium text-gray-700">
            취소
          </Text>
        </Button>
        <Button className="rounded-lg bg-gray-300 px-6 py-2">
          <Text variant="base" className="font-medium text-white">
            기록 저장
          </Text>
        </Button>
      </footer>
    </div>
  )
}
