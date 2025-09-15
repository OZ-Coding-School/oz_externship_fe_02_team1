import { useState } from 'react'
import { ArrowLongLeftIcon, PlusIcon } from '@heroicons/react/24/outline'

import {
  Button,
  H2,
  Text,
  PrimaryInfoSection,
  PeriodMemberSection,
  LectureSelectSection,
} from '@components'
import { usePageNav } from '@hooks'
import { useMediaQuery } from 'react-responsive'
import { mediaQuery } from '@constants'
import { cn } from '@utils'
import type { StudyGroupLectureList } from '@models'

const INITIAL_MEMBER_COUNT = 6

export default function CreateStudyGroup() {
  const { handleGoBack } = usePageNav()
  const isMobile = useMediaQuery({ query: mediaQuery.mobile })

  // --- 기본 정보 상태 ---
  const [groupName, setGroupName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [imageFile, setImageFile] = useState<File | null>(null)

  // --- 기간/인원 상태 ---
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [memberCount, setMemberCount] = useState<number>(INITIAL_MEMBER_COUNT)

  // --- 강의 정보 상태 ---
  const [lectures, setLectures] = useState<StudyGroupLectureList[]>([])

  return (
    <form className="flex flex-col gap-6 lg:gap-8">
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="cursor-pointer rounded-full bg-gray-100 p-3 transition-colors duration-300 hover:bg-gray-200"
          onClick={handleGoBack}
        >
          <ArrowLongLeftIcon width={16} />
        </button>
        <div className="flex flex-col gap-1">
          <H2 className={cn(isMobile && 'text-2xl')}>새 스터디 그룹 만들기</H2>
          <Text className="text-gray-600">
            함께 공부할 멤버들과 스터디 그룹을 시작해보세요.
          </Text>
        </div>
      </div>

      <PrimaryInfoSection
        groupName={groupName}
        onChangeGroupName={setGroupName}
        description={description}
        onChangeDescription={setDescription}
        imageFile={imageFile}
        onChangeImage={setImageFile}
      />
      <PeriodMemberSection
        startDate={startDate}
        endDate={endDate}
        memberCount={memberCount}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        onMemberCountChange={setMemberCount}
      />
      <LectureSelectSection
        lectures={lectures}
        actionSlot={
          <Button
            type="button"
            size={isMobile ? 'small' : 'medium'}
            className={cn(isMobile ? 'py-2' : 'py-2 text-base')}
          >
            <PlusIcon width={16} />
            강의 추가하기
          </Button>
        }
      />

      <div className="flex justify-end gap-4">
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
          스터디 그룹 만들기
        </Button>
      </div>
    </form>
  )
}
