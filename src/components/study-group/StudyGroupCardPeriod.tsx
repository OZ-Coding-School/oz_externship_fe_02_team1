import { Text } from '@components'
import { formatToYMD } from '@utils'

import { CalendarIcon } from '@/assets'


export default function StudyGroupCardPeriod({ startAt, endAt }: any) {
  const startDate = formatToYMD(new Date(startAt))
  const endDate = formatToYMD(new Date(endAt))

  return (
    <section className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <CalendarIcon />
        <Text variant="small" className="font-medium text-gray-600">
          스터디 기간
        </Text>
      </div>
      <Text variant="small" className="pl-6 font-normal text-gray-700">
        {startDate} ~ {endDate}
      </Text>
    </section>
  )
}
