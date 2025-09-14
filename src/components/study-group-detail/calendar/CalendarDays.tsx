import { cn } from '@utils'

const DAY_NAMES = ['일', '월', '화', '수', '목', '금', '토']

export default function CalendarDays() {
  return (
    <div className="grid grid-cols-7 rounded-t-lg border-t border-l border-gray-200">
      {DAY_NAMES.map((day, index) => (
        <div
          key={day}
          className={cn(
            'border-r border-gray-200 bg-gray-50 py-3 text-center text-sm text-gray-700',
            index === DAY_NAMES.length - 1 && 'rounded-tr-lg'
          )}
        >
          {day}
        </div>
      ))}
    </div>
  )
}
