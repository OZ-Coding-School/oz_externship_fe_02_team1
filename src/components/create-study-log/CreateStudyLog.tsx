import { H2, Text } from '@components'
import { BreadCrumb } from '@components'

export default function CreateStudyLog() {
  const items = [
    { label: '홈', to: '/' },
    { label: '스터디 그룹', to: '/study' },
    { label: '스터디 상세', to: '/study-detail' },
    { label: '기록 작성' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl">
      <BreadCrumb items={items} className="pb-4" />
      <header className="pb-6">
        <H2 className="leading-9 font-bold text-gray-900">스터디 기록 작성</H2>
        <Text className="inline-flex pt-2 text-gray-600">
          학습한 내용을 자세히 기록해보세요
        </Text>
      </header>
    </form>
  )
}
