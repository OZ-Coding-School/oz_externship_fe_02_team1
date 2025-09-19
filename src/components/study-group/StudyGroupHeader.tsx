import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import { Button, Input, SectionHeader, Text } from '@components'
import { useNavigate } from 'react-router'

export default function StudyGroupHeader() {
  const navigate = useNavigate()

  const handleCreateNewStudy = () => {
    navigate('/study-group/create')
  }

  return (
    <header className="flex flex-col gap-8">
      <SectionHeader
        title="스터디 그룹"
        titleVariant="3xl"
        subtitle="함께 공부하며 성장하는 스터디 그룹에 참여해보세요"
      >
        <Button variant="primary" onClick={handleCreateNewStudy}>
          <Text>+ 새 스터디 만들기</Text>
        </Button>
      </SectionHeader>
      <Input
        placeholder="스터디 그룹 검색...."
        leftIcon={<MagnifyingGlassIcon className="h-4 w-4" />}
      />
    </header>
  )
}
