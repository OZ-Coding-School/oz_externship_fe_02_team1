import { Card, DateInput, MembersSlider } from '@components'
import { useState } from 'react'

const INITIAL_MEMBER_COUNT = 6

export default function PeriodMemberSection() {
  const [memberCount, setMemberCount] = useState<number>(INITIAL_MEMBER_COUNT)

  return (
    <Card
      title="스터디 기간 및 인원"
      titleClassName="text-xl pb-0"
      cardClassName="p-8 gap-6"
    >
      <div className="grid grid-cols-2 grid-rows-2 gap-6">
        <DateInput label="스터디 시작일" required className="mt-0.5" />
        <DateInput label="스터디 종료일" required className="mt-0.5" />
        <MembersSlider
          className="col-span-2"
          value={memberCount}
          onChange={setMemberCount}
        />
      </div>
    </Card>
  )
}
