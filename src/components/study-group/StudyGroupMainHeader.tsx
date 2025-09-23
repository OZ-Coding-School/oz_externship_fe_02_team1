import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

import { Button, Input, SectionHeader, Text } from '@components'
import { usePageNav } from '@hooks'
import useDebounce from '@/hooks/useDebounce'

export default function StudyGroupMainHeader() {
  const [text, setText] = useState('')
  const debouncedText = useDebounce(text, 500)
  const { navigateToCreateNewStudy } = usePageNav()

  useEffect(() => {
    if (debouncedText) {
      console.log('검색 실행', debouncedText)
    }
  }, [debouncedText])

  return (
    <header className="flex flex-col gap-8">
      <SectionHeader
        title="스터디 그룹"
        titleVariant="3xl"
        subtitle="함께 공부하며 성장하는 스터디 그룹에 참여해보세요"
      >
        <Button variant="primary" onClick={navigateToCreateNewStudy}>
          <Text className="text-white">+ 새 스터디 만들기</Text>
        </Button>
      </SectionHeader>
      <Input
        placeholder="스터디 그룹 검색...."
        leftIcon={<MagnifyingGlassIcon className="h-4 w-4" />}
        onChange={(e) => {
          setText(e.target.value)
        }}
        value={text}
      />
    </header>
  )
}
