import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

import { Input } from '@components'
import { cn } from '@utils'

export default function ChatInput() {
  const [message, setMessage] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = message.trim()
    if (!text) return
    setMessage('')
  }

  const isActive = message.trim().length > 0

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 border-t border-gray-200 p-3"
    >
      <Input
        className="h-9.5 flex-grow rounded-full px-3 py-2"
        placeholder="메시지를 입력하세요..."
        value={message}
        onChange={handleChange}
      />
      <button
        type="submit"
        className={cn(
          'rounded-full p-2 text-white transition-colors duration-200',
          isActive
            ? 'bg-primary-500 hover:bg-primary-600 cursor-pointer'
            : 'cursor-not-allowed bg-gray-300'
        )}
        aria-label="메시지 전송"
        disabled={!isActive}
      >
        <PaperAirplaneIcon width={16} className="rotate-315" />
      </button>
    </form>
  )
}
