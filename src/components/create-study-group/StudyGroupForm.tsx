import { ArrowLongLeftIcon, PlusIcon } from '@heroicons/react/24/outline'

import {
  Button,
  H2,
  Text,
  PrimaryInfoSection,
  PeriodMemberSection,
  LectureSelectSection,
} from '@components'
import { cn } from '@utils'
import type { StudyGroupLectureList } from '@models'
import { usePageNav } from '@hooks'
import { useMediaQuery } from 'react-responsive'
import { mediaQuery } from '@constants'

interface StudyGroupFormProps {
  mode: 'create' | 'edit'

  // Form submission
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void

  // Primary Info
  groupName: string
  onChangeGroupName: (value: string) => void
  description?: string
  onChangeDescription: (value: string) => void
  imageFile: File | null
  onChangeImage: (file: File | null) => void
  initialImageUrl?: string | null

  // Period & Members
  startDate: string
  endDate: string
  memberCount: number
  onStartDateChange: (date: string) => void
  onEndDateChange: (date: string) => void
  onMemberCountChange: (count: number) => void

  // Lectures
  lectures: StudyGroupLectureList[]
}

export default function StudyGroupForm({
  mode,
  onSubmit,
  groupName,
  onChangeGroupName,
  description,
  onChangeDescription,
  imageFile,
  onChangeImage,
  initialImageUrl,
  startDate,
  endDate,
  memberCount,
  onStartDateChange,
  onEndDateChange,
  onMemberCountChange,
  lectures,
}: StudyGroupFormProps) {
  const { handleGoBack } = usePageNav()
  const isMobile = useMediaQuery({ query: mediaQuery.mobile })

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6 lg:gap-8">
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="cursor-pointer rounded-full bg-gray-100 p-3 transition-colors duration-300 hover:bg-gray-200"
          onClick={handleGoBack}
        >
          <ArrowLongLeftIcon width={16} />
        </button>
        <div className="flex flex-col gap-1">
          <H2 className={cn(isMobile && 'text-2xl')}>
            {mode === 'create' ? '새 스터디 그룹 만들기' : '스터디 그룹 수정'}
          </H2>
          <Text className="text-gray-600">
            {mode === 'create'
              ? '함께 공부할 멤버들과 스터디 그룹을 시작해보세요.'
              : '스터디 그룹 정보를 수정해주세요.'}
          </Text>
        </div>
      </div>

      <PrimaryInfoSection
        groupName={groupName}
        onChangeGroupName={onChangeGroupName}
        description={description}
        onChangeDescription={onChangeDescription}
        imageFile={imageFile}
        onChangeImage={onChangeImage}
        initialImageUrl={initialImageUrl}
      />
      <PeriodMemberSection
        startDate={startDate}
        endDate={endDate}
        memberCount={memberCount}
        onStartDateChange={onStartDateChange}
        onEndDateChange={onEndDateChange}
        onMemberCountChange={onMemberCountChange}
      />
      <LectureSelectSection
        lectures={lectures}
        actionSlot={
          <Button
            type="button"
            size={isMobile ? 'small' : 'medium'}
            className={cn('py-2', !isMobile && 'py-2 text-base')}
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
          {mode === 'create' ? '스터디 그룹 만들기' : '수정하기'}
        </Button>
      </div>
    </form>
  )
}
