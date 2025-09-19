import { PlusIcon } from '@heroicons/react/24/outline'
import { useFormContext, Controller } from 'react-hook-form'
import { useMediaQuery } from 'react-responsive'

import {
  Button,
  PrimaryInfoSection,
  PeriodMemberSection,
  LectureSelectSection,
  FormHeader,
  FormFooter,
  type FormMode,
  type StudyGroupFormValues,
} from '@components'
import { MAX_LECTURES, mediaQuery } from '@constants'
import { cn } from '@utils'

interface StudyGroupFormProps extends FormMode {
  onSubmit: (values: StudyGroupFormValues) => void
}

export default function StudyGroupForm({
  mode,
  onSubmit,
}: StudyGroupFormProps) {
  const isMobile = useMediaQuery({ query: mediaQuery.mobile })
  const { handleSubmit, control } = useFormContext<StudyGroupFormValues>()

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 lg:gap-8"
    >
      <FormHeader mode={mode} />

      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <PrimaryInfoSection
            groupName={field.value}
            onChangeGroupName={field.onChange}
            description={undefined}
            onChangeDescription={() => {}}
            imageFile={null}
            onChangeImage={() => {}}
            initialImageUrl={undefined}
          />
        )}
      />

      <Controller
        name="startAt"
        control={control}
        render={({ field }) => (
          <PeriodMemberSection
            startDate={field.value}
            endDate=""
            memberCount={0}
            onStartDateChange={field.onChange}
            onEndDateChange={() => {}}
            onMemberCountChange={() => {}}
          />
        )}
      />

      <Controller
        name="lectures"
        control={control}
        render={({ field }) => (
          <LectureSelectSection
            lectures={field.value}
            actionSlot={
              field.value.length < MAX_LECTURES ? (
                <Button
                  type="button"
                  size={isMobile ? 'small' : 'medium'}
                  className={cn(
                    'absolute top-6 right-6 py-2',
                    !isMobile && 'top-8 right-8 text-base'
                  )}
                  onClick={() => {
                    field.onChange([
                      ...field.value,
                      { id: Date.now(), title: '새 강의' },
                    ])
                  }}
                >
                  <PlusIcon width={16} />
                  강의 추가하기
                </Button>
              ) : null
            }
          />
        )}
      />

      <FormFooter mode={mode} />
    </form>
  )
}
