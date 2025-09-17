import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

import {
  BaseModal,
  ModalBody,
  Input,
  Textarea,
  DateInput,
  Badge,
  Text,
  ScheduleDatePickerModal,
  MODAL_PRESETS,
} from '@components'
import { useModal } from '@hooks'
import { studyGroup } from '@mocks/studyGroupDetail'

interface ScheduleFormInputs {
  name: string
  goal: string
  date: Date
  startTime: string
  endTime: string
  participants: string[]
}

interface AddScheduleModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AddScheduleModal({
  isOpen,
  onClose,
}: AddScheduleModalProps) {
  const datePickerModal = useModal(false, () => setTempDate(undefined))
  const [tempDate, setTempDate] = useState<Date | undefined>(undefined)

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ScheduleFormInputs>({
    defaultValues: {
      name: '',
      goal: '',
      participants: [],
    },
  })

  const handleClose = () => {
    reset()
    onClose()
  }

  const handleConfirm = (data: ScheduleFormInputs) => {
    console.log(data)
    handleClose()
  }

  const confirmDate = () => {
    if (tempDate) {
      setValue('date', tempDate, { shouldValidate: true })
    }
    datePickerModal.closeModal()
  }

  return (
    <>
      <BaseModal isOpen={isOpen} onClose={handleClose} size="md">
        {MODAL_PRESETS.scheduleAdd.header({
          onClose: handleClose,
          title: '새 스케줄 추가',
        })}

        <ModalBody>
          <form className="space-y-6" onSubmit={handleSubmit(handleConfirm)}>
            <Input
              label="스케줄명"
              placeholder="스케줄 제목을 입력하세요"
              isRequired
              {...register('name', { required: '스케줄명을 입력해주세요.' })}
              errorText={errors.name?.message}
            />

            <Textarea
              label="스터디 목표"
              placeholder="이번 스터디에서 달성하고자 하는 목표를 입력하세요"
              isRequired
              {...register('goal', { required: '스터디 목표를 입력해주세요.' })}
              errorText={errors.goal?.message}
            />

            <Controller
              name="date"
              control={control}
              rules={{ required: '스터디 날짜를 선택해주세요.' }}
              render={({ field }) => (
                <DateInput
                  label="스터디 날짜"
                  placeholder="-/-/-"
                  required
                  value={field.value ? field.value.toLocaleDateString() : ''}
                  onOpenCalendar={datePickerModal.openModal}
                  errorText={errors.date?.message}
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
                {...register('endTime', {
                  required: '종료 시간을 선택해주세요.',
                })}
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
                      {studyGroup.member.map((el) => (
                        <label
                          key={el.name}
                          className="flex items-center gap-3"
                        >
                          <input
                            type="checkbox"
                            value={el.name}
                            checked={field.value.includes(el.name)}
                            onChange={(e) => {
                              const selected = field.value
                              const value = e.target.value
                              if (selected.includes(value)) {
                                field.onChange(
                                  selected.filter((item) => item !== value)
                                )
                              } else {
                                field.onChange([...selected, value])
                              }
                            }}
                          />
                          <div className="flex items-center gap-2">
                            {el.name}
                            {el.isLeader && (
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
                      <p className="text-danger-600 mt-1 text-[12px]">
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
        </ModalBody>

        {MODAL_PRESETS.scheduleAdd.footer({
          onClose: handleClose,
          onConfirm: handleSubmit(handleConfirm),
        })}
      </BaseModal>

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
