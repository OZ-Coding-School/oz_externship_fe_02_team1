import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'

import { H2, Text } from '@components'
import { cn } from '@utils'
import { usePageNav } from '@hooks'
import { useMediaQuery } from 'react-responsive'
import { mediaQuery } from '@constants'

interface FormHeaderProps {
  mode: 'create' | 'edit'
}

export default function FormHeader({ mode }: FormHeaderProps) {
  const { handleGoBack } = usePageNav()
  const isMobile = useMediaQuery({ query: mediaQuery.mobile })

  return (
    <header className="flex items-center gap-4">
      <button
        type="button"
        className="cursor-pointer rounded-full bg-gray-100 p-3 transition-colors duration-300 hover:bg-gray-200"
        onClick={handleGoBack}
      >
        <ArrowLongLeftIcon width={16} />
      </button>

      <div className="flex flex-col gap-1">
        <H2 className={cn(isMobile && 'text-2xl')}>
          {mode === 'create' ? '새 스터디 그룹 만들기' : '스터디 그룹 수정'}
        </H2>
        <Text className="text-gray-600">
          {mode === 'create'
            ? '함께 공부할 멤버들과 스터디 그룹을 시작해보세요.'
            : '스터디 그룹 정보를 수정해주세요.'}
        </Text>
      </div>
    </header>
  )
}
