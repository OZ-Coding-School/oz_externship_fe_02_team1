import { PlusIcon } from '@heroicons/react/24/outline'
import { useFormContext, useController } from 'react-hook-form'
import { useMediaQuery } from 'react-responsive'

import {
  Button,
  PrimaryInfoSection,
  PeriodMemberSection,
  LectureSelectSection,
  FormHeader,
  FormFooter,
  LectureSelectModal,
  type FormMode,
  type StudyGroupFormValues,
} from '@components'
import { MAX_LECTURES, mediaQuery } from '@constants'
import { useModal } from '@hooks'
import { cn } from '@utils'
import type { LectureItem } from '@api'

interface StudyGroupFormProps extends FormMode {
  onSubmit: (values: StudyGroupFormValues) => void
}

export default function StudyGroupForm({
  mode,
  onSubmit,
}: StudyGroupFormProps) {
  const isMobile = useMediaQuery({ query: mediaQuery.mobile })
  const { handleSubmit, control } = useFormContext<StudyGroupFormValues>()
  const { isOpen, openModal, closeModal } = useModal()

  const { field: nameField } = useController({ name: 'name', control })
  const { field: descriptionField } = useController({
    name: 'introduction',
    control,
  })
  const { field: startAtField } = useController({ name: 'startAt', control })
  const { field: endAtField } = useController({ name: 'endAt', control })
  const { field: memberCountField } = useController({
    name: 'currentHeadcount',
    control,
  })
  const { field: lecturesField } = useController({ name: 'lectures', control })
  const { field: profileImgUrlField } = useController({
    name: 'profileImgUrl',
    control,
  })
  const { field: profileImgField } = useController({
    name: 'profileImg',
    control,
  })

  const handleConfirmSelection = (lectures: LectureItem[]) => {
    const currentLectures = lecturesField.value || []
    const lectureMap = new Map()

    currentLectures.forEach((lecture: LectureItem) =>
      lectureMap.set(lecture.uuid, lecture)
    )
    lectures.forEach((lecture) => lectureMap.set(lecture.uuid, lecture))

    const mergedLectures = Array.from(lectureMap.values())

    lecturesField.onChange(mergedLectures)
  }

  const handleDeleteLecture = (uuid: string) => {
    const updatedLectures = lecturesField.value.filter(
      (lecture: LectureItem) => lecture.uuid !== uuid
    )
    lecturesField.onChange(updatedLectures)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 lg:gap-8"
    >
      <FormHeader mode={mode} />

      <PrimaryInfoSection
        groupName={nameField.value}
        onChangeGroupName={nameField.onChange}
        description={descriptionField.value}
        onChangeDescription={descriptionField.onChange}
        imageFile={profileImgField.value}
        onChangeImage={profileImgField.onChange}
        initialImageUrl={profileImgUrlField.value}
      />

      <PeriodMemberSection
        startDate={startAtField.value}
        endDate={endAtField.value}
        memberCount={memberCountField.value}
        onStartDateChange={startAtField.onChange}
        onEndDateChange={endAtField.onChange}
        onMemberCountChange={memberCountField.onChange}
      />

      <LectureSelectSection
        lectures={lecturesField.value}
        onDeleteLecture={handleDeleteLecture}
        actionSlot={
          lecturesField.value.length < MAX_LECTURES ? (
            <Button
              type="button"
              size={isMobile ? 'small' : 'medium'}
              className={cn(
                'absolute top-6 right-6 py-2',
                !isMobile && 'top-8 right-8 text-base'
              )}
              onClick={openModal}
            >
              <PlusIcon width={16} />
              강의 추가하기
            </Button>
          ) : null
        }
      />

      {isOpen && (
        <LectureSelectModal
          isOpen={isOpen}
          onClose={closeModal}
          initialSelectedLectures={lecturesField.value}
          onConfirmSelection={handleConfirmSelection}
        />
      )}

      <FormFooter mode={mode} />
    </form>
  )
}
