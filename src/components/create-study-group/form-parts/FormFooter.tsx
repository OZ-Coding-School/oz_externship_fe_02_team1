import { usePageNav } from '@hooks'
import { Button, type FormMode } from '@components'
import { useMediaQuery } from 'react-responsive'
import { mediaQuery } from '@constants'
import { cn } from '@utils'

export default function FormFooter({ mode }: FormMode) {
  const { handleGoBack } = usePageNav()
  const isMobile = useMediaQuery({ query: mediaQuery.mobile })

  return (
    <footer className="flex justify-end gap-4">
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
        {mode === 'create' ? '스터디 그룹 만들기' : '수정하기'}
      </Button>
    </footer>
  )
}
