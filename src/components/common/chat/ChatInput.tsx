import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { Input } from '@components'
import { cn } from '@utils'

export default function ChatInput() {
  const [message, setMessage] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const handleSubmit = () => {
    if (message.trim()) {
      setMessage('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const isActive = message.trim().length > 0

  return (
    <div className="flex items-center gap-2 border-t border-gray-200 p-3">
      <Input
        className="h-9.5 rounded-full px-3 py-2"
        placeholder="메시지를 입력하세요..."
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <PaperAirplaneIcon
        width={32}
        className={cn(
          'rotate-315 rounded-full p-2 text-white',
          isActive ? 'bg-primary-500 cursor-pointer' : 'bg-gray-300'
        )}
        onClick={handleSubmit}
      />
    </div>
  )
}
