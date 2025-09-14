import { format, subMonths, addMonths } from 'date-fns'
import { ko } from 'date-fns/locale'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { cn } from '@utils'

const buttonStyle = 'rounded-full p-1 hover:bg-gray-100'
const arrowIconStyle = 'cursor-pointer p-0.5 text-gray-600'

interface CalendarHeaderProps {
  currentMonth: Date
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>
}

export default function CalendarHeader({
  currentMonth,
  setCurrentMonth,
}: CalendarHeaderProps) {
  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  return (
    <div className="mb-4 flex items-center justify-between px-2">
      <button
        type="button"
        onClick={handlePrevMonth}
        className={cn(buttonStyle)}
      >
        <ChevronLeftIcon width={16} className={cn(arrowIconStyle)} />
      </button>
      <h2 className="text-lg font-semibold text-gray-900">
        {format(currentMonth, 'yyyy년 MMMM', { locale: ko })}
      </h2>
      <button
        type="button"
        onClick={handleNextMonth}
        className={cn(buttonStyle)}
      >
        <ChevronRightIcon width={16} className={cn(arrowIconStyle)} />
      </button>
    </div>
  )
}
