import { DayPicker } from 'react-day-picker'
import 'react-day-picker/style.css'
import { ko } from 'date-fns/locale'
import { cn } from '@utils'

import type { CalendarProps } from '@components'
import { CALENDAR_CLASSNAMES } from '@components'
import {
  buildDisabled,
  buildWrapperClass,
} from '@components/common/date-picker/calendar.utils'
import ChevronIcon from '@assets/icons/chevron'

const Calendar = ({
  selected,
  onSelect,
  disabled,
  className,
  disabledBefore,
  disabledAfter,
  variant = 'card',
  width = 'fixed',
}: CalendarProps) => {
  const finalDisabled = buildDisabled(disabledBefore, disabledAfter, disabled)
  const wrapperClass = buildWrapperClass(width, variant, className)

  return (
    <div className={wrapperClass}>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={(d) => d && onSelect(d)}
        showOutsideDays
        weekStartsOn={0}
        locale={ko}
        captionLayout="dropdown"
        disabled={finalDisabled}
        className="rdp m-0 w-full rounded-none border-0 bg-transparent p-0 text-gray-900 shadow-none select-none"
        components={{
          Chevron: ({ orientation, className, disabled }) => (
            <ChevronIcon
              className={cn(
                'opacity-80 transition',
                disabled && 'opacity-40',
                orientation === 'left' && 'rotate-180',
                orientation === 'up' && '-rotate-90',
                orientation === 'down' && 'rotate-90',
                className
              )}
            />
          ),
        }}
        classNames={CALENDAR_CLASSNAMES}
      />
    </div>
  )
}

export default Calendar
