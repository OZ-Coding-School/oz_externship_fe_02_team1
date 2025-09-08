import Input from '@components/common/form/Input'
import { Button, H2, MarkdownEditor } from '@components'
import { Text } from '@components'
import { useState } from 'react'
import { BreadCrumb } from '@components'

export default function StudyLog() {
  const [description, setDescription] = useState('Hello')

  const items = [
    { label: '홈', to: '/' },
    { label: '스터디 기록', to: '/study' },
    { label: '스터디 상세', to: '/study-detail' },
    { label: '기록 작성' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <form className="p-8" onSubmit={handleSubmit}>
      <BreadCrumb items={items} />
      <header className="pb-6">
        <H2 className="leading-9 font-bold text-gray-900">스터디 기록 작성</H2>
        <Text className="text-gray-600">학습한 내용을 자세히 기록해보세요</Text>
      </header>
      {/* 스터디 작성 구역 */}
      <section className="p-6">
        <label className="pb-2 text-sm font-medium text-gray-700">제목 </label>
        <Text className="text-sm font-medium text-red-500">*</Text>
        <Input
          placeholder="스터디 기록의 제목을 입력하세요"
          className="relative rounded-lg px-3 py-2"
        />
        <Text variant="small" className="pt-1 font-normal text-gray-500">
          0/100자
        </Text>

        <div className="pt-6">
          <label className="pb-2 text-sm font-medium text-gray-700">
            내용{' '}
          </label>
          <span className="text-sm font-medium text-red-500">*</span>
          <MarkdownEditor value={description} onChange={setDescription} />
          <Text className="text-xs font-normal text-gray-500">
            마크다운 문법을 사용할 수 있습니다. 이미지는 드래그 앤 드롭으로
            첨부할 수 있습니다
          </Text>
        </div>
        <div className="pt-6">
          <label className="text-sm font-medium text-gray-700">첨부 파일</label>
          <div>첨부 파일 들어감</div>
        </div>
      </section>
      {/* 맨 아래 취소, 저장 버튼 */}
      <footer className="flex justify-between">
        <Button
          variant="outline"
          className="rounded-lg px-6 py-2"
          type="button"
        >
          <Text variant="base" className="font-medium text-gray-700">
            취소
          </Text>
        </Button>
        <Button className="rounded-lg bg-gray-300 px-6 py-2" type="submit">
          <Text variant="base" className="font-medium text-white">
            기록 저장
          </Text>
        </Button>
      </footer>
    </form>
  )
}
