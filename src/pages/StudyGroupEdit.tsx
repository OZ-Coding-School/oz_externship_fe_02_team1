import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'

import {
  Button,
  H2,
  Text,
  PrimaryInfoSection,
  PeriodMemberSection,
} from '@components'

export default function StudyGroupEdit() {
  return (
    <form className="flex flex-col gap-6 lg:gap-8">
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="cursor-pointer rounded-full bg-gray-100 p-3 transition-colors duration-300 hover:bg-gray-200"
        >
          <ArrowLongLeftIcon width={16} />
        </button>
        <div className="flex flex-col gap-1">
          <H2>스터디 그룹 수정</H2>
          <Text className="text-gray-600">
            스터디 그룹 정보를 수정해주세요.
          </Text>
        </div>
      </div>

      <PrimaryInfoSection />
      <PeriodMemberSection />

      <div className="flex justify-end gap-4">
        <Button variant="outline" className="bg-transparent">
          취소
        </Button>
        <Button type="submit">스터디 그룹 만들기</Button>
      </div>
    </form>
  )
}
