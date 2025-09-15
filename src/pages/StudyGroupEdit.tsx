import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'
import { usePageNav } from '@hooks'

import {
  Button,
  H2,
  Text,
  PrimaryInfoSection,
  PeriodMemberSection,
  LectureSelectSection,
} from '@components'
import { useMediaQuery } from 'react-responsive'
import { mediaQuery } from '@constants'
import { cn } from '@utils'

export default function StudyGroupEdit() {
  const { handleGoBack } = usePageNav()
  const isMobile = useMediaQuery({ query: mediaQuery.mobile })

  return (
    <form className="flex flex-col gap-6 lg:gap-8">
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="cursor-pointer rounded-full bg-gray-100 p-3 transition-colors duration-300 hover:bg-gray-200"
          onClick={handleGoBack}
        >
          <ArrowLongLeftIcon width={16} />
        </button>
        <div className="flex flex-col gap-1">
          <H2 className={cn(isMobile && 'text-2xl')}>스터디 그룹 수정</H2>
          <Text className="text-gray-600">
            스터디 그룹 정보를 수정해주세요.
          </Text>
        </div>
      </div>

      <PrimaryInfoSection />
      <PeriodMemberSection />
      <LectureSelectSection />

      <div className="flex justify-end gap-4">
        <Button
          type="button"
          variant="outline"
          size={isMobile ? 'small' : 'large'}
          className="bg-transparent"
          onClick={handleGoBack}
        >
          취소
        </Button>
        <Button
          type="submit"
          size={isMobile ? 'small' : 'large'}
          className={cn(!isMobile && 'px-8')}
        >
          스터디 그룹 만들기
        </Button>
      </div>
    </form>
  )
}
