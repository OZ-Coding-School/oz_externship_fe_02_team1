import { Controller, type UseFormReturn } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import {
  Input,
  Textarea,
  DateInput,
  Badge,
  Text,
  ScheduleDatePickerModal,
  LoadingState,
} from '@components'
import { useModal, useStudyGroupQuery } from '@hooks'
import { formatToYMD } from '@utils'

import type { ScheduleFormInputs } from '@models'

interface ScheduleFormProps {
  formMethods: UseFormReturn<ScheduleFormInputs>
  tempDate: Date | undefined
  setTempDate: (d: Date | undefined) => void
}

export default function ScheduleForm({
  formMethods,
  tempDate,
  setTempDate,
}: ScheduleFormProps) {
  const {
    register,
    control,
    setValue,
    formState: { errors },
  } = formMethods

  const { groupId } = useParams<{ groupId: string }>()
  const { data: studyGroupData, isLoading } = useStudyGroupQuery(groupId || '')

  const datePickerModal = useModal(false, () => setTempDate(undefined))

  const confirmDate = () => {
    if (tempDate) {
      setValue('sessionDate', formatToYMD(tempDate), { shouldValidate: true })
    }
    datePickerModal.closeModal()
  }

  if (isLoading) {
    return <LoadingState />
  }

  const members = studyGroupData?.members || []

  return (
    <>
      <form className="space-y-6">
        <Input
          label="스케줄명"
          placeholder="스케줄 제목을 입력하세요"
          isRequired
          {...register('title', { required: '스케줄명을 입력해주세요.' })}
          errorText={errors.title?.message}
        />

        <Controller
          name="objective"
          control={control}
          rules={{ required: '스터디 목표를 입력해주세요.' }}
          render={({ field }) => (
            <Textarea
              label="스터디 목표"
              placeholder="이번 스터디에서 달성하고자 하는 목표를 입력하세요"
              isRequired
              value={field.value}
              onChange={field.onChange}
              errorText={errors.objective?.message}
            />
          )}
        />

        <Controller
          name="sessionDate"
          control={control}
          rules={{ required: '스터디 날짜를 선택해주세요.' }}
          render={({ field }) => (
            <DateInput
              label="스터디 날짜"
              placeholder="-/-/-"
              required
              value={field.value ? field.value : ''}
              onOpenCalendar={datePickerModal.openModal}
              errorText={errors.sessionDate?.message}
            />
          )}
        />

        <div className="flex gap-4">
          <Input
            label="시작 시간"
            type="time"
            isRequired
            {...register('startTime', {
              required: '시작 시간을 선택해주세요.',
            })}
            errorText={errors.startTime?.message}
          />
          <Input
            label="종료 시간"
            type="time"
            isRequired
            {...register('endTime', { required: '종료 시간을 선택해주세요.' })}
            errorText={errors.endTime?.message}
          />
        </div>

        <fieldset>
          <legend className="mb-1.5 block text-sm font-medium text-gray-700">
            참여자 선택 <span className="text-danger-500">*</span>
          </legend>
          <Controller
            name="participants"
            control={control}
            rules={{ required: '참여자를 선택해주세요.' }}
            render={({ field }) => (
              <>
                <div className="flex flex-col gap-2 rounded-lg border border-gray-300 p-4">
                  {members.map((member) => (
                    <label
                      key={member.nickname}
                      className="flex items-center gap-3"
                    >
                      <input
                        type="checkbox"
                        value={member.nickname}
                        checked={field.value.some(
                          (p) => p.nickname === member.nickname
                        )}
                        onChange={(e) => {
                          if (e.target.checked) {
                            field.onChange([...field.value, member])
                          } else {
                            field.onChange(
                              field.value.filter(
                                (p) => p.nickname !== member.nickname
                              )
                            )
                          }
                        }}
                      />
                      <div className="flex items-center gap-2">
                        {member.nickname}
                        {member.isLeader && (
                          <Badge
                            color="primary"
                            size="md"
                            className="rounded-sm !px-2 text-xs"
                          >
                            리더
                          </Badge>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
                {errors.participants && (
                  <p className="text-danger-600 mt-1 text-[12px] leading-5">
                    {errors.participants.message}
                  </p>
                )}
                <Text variant="extraSmall" className="mt-2 text-gray-500">
                  선택된 참여자: {field.value.length}명
                </Text>
              </>
            )}
          />
        </fieldset>
      </form>

      <ScheduleDatePickerModal
        isOpen={datePickerModal.isOpen}
        tempDate={tempDate}
        setTempDate={setTempDate}
        close={datePickerModal.closeModal}
        confirm={confirmDate}
        confirmDisabled={!tempDate}
      />
    </>
  )
}
