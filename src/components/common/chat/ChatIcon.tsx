import { mediaQuery } from '@constants'
import { cn } from '@utils'
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'
import { useMediaQuery } from 'react-responsive'

export default function ChatIcon() {
  const isMobile = useMediaQuery({ query: mediaQuery.mobile })

  return (
    <button
      type="button"
      className={cn(
        'bg-primary-500 fixed flex h-16 w-16 cursor-pointer items-center justify-center rounded-full shadow-md',
        isMobile ? 'right-4 bottom-4' : 'right-6 bottom-6'
      )}
    >
      <ChatBubbleOvalLeftIcon width={24} color="white" strokeWidth={2} />
    </button>
  )
}
