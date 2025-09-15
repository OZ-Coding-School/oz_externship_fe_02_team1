import { PlusIcon } from '@heroicons/react/24/outline'
import { useMediaQuery } from 'react-responsive'

import {
  Button,
  PrimaryInfoSection,
  PeriodMemberSection,
  LectureSelectSection,
  FormHeader,
  FormFooter,
  type FormMode,
} from '@components'
import { mediaQuery } from '@constants'
import { cn } from '@utils'

import type { StudyGroupLectureList } from '@models'

interface StudyGroupFormProps extends FormMode {
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
  const isMobile = useMediaQuery({ query: mediaQuery.mobile })

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6 lg:gap-8">
      <FormHeader mode={mode} />

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

      <FormFooter mode={mode} />
    </form>
  )
}
