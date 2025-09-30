import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import { Button, Input, SectionHeader, Text } from '@components'
import { usePageNav } from '@hooks'
import { useMediaQuery } from 'react-responsive'
import { mediaQuery } from '@/constants'
import { cn } from '@/utils'

interface StudyGroupMainHeaderProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export default function StudyGroupMainHeader({
  searchQuery,
  setSearchQuery,
}: StudyGroupMainHeaderProps) {
  const { navigateToCreateNewStudy } = usePageNav()
  const isMobile = useMediaQuery({ query: mediaQuery.mobile })

  return (
    <header className="flex flex-col gap-8">
      <SectionHeader
        title="스터디 그룹"
        titleVariant="3xl"
        subtitle="함께 공부하며 성장하는 스터디 그룹에 참여해보세요"
        className={cn(isMobile && 'flex w-full flex-col gap-2 sm:flex-row')}
      >
        <Button
          variant="primary"
          onClick={navigateToCreateNewStudy}
          className={cn(isMobile && 'w-full justify-center self-start sm:flex')}
        >
          {!isMobile && ' + '}
          <Text className="text-xs text-white sm:text-lg">
            새 스터디 만들기
          </Text>
        </Button>
      </SectionHeader>
      <Input
        placeholder="스터디 그룹 검색...."
        leftIcon={<MagnifyingGlassIcon className="h-4 w-4" />}
        onChange={(e) => {
          setSearchQuery(e.target.value)
        }}
        value={searchQuery}
      />
    </header>
  )
}
