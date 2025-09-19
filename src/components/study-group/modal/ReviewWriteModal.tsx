import { useForm, Controller } from 'react-hook-form'

import {
  BaseModal,
  MODAL_PRESETS,
  ModalBody,
  Rating,
  Text,
  Textarea,
} from '@components'
import { studyGroup } from '@mocks/studyGroupDetail'

interface ReviewFormInputs {
  rating: number
  reviewText: string
}

interface ReviewWriteModalProps {
  isOpen: boolean
  onClose: () => void
  confirm: (data: ReviewFormInputs) => void
}

export default function ReviewWriteModal({
  isOpen,
  onClose,
  confirm,
}: ReviewWriteModalProps) {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<ReviewFormInputs>({
    defaultValues: {
      rating: 0,
      reviewText: '',
    },
  })

  const handleConfirm = (data: ReviewFormInputs) => {
    confirm(data)
  }

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      size={MODAL_PRESETS.reviewWrite.size}
      labelledById="modal-title"
    >
      {MODAL_PRESETS.reviewWrite.header({
        onClose: onClose,
      })}

      <ModalBody className="space-y-6">
        <div className="flex flex-col gap-2">
          <Text className="font-medium text-gray-900">{studyGroup.name}</Text>
          <Text variant="small" className="text-gray-600">
            {studyGroup.startAt}&nbsp;~&nbsp;
            {studyGroup.endAt}
          </Text>
        </div>

        <form className="space-y-6">
          <div className="flex flex-col gap-3">
            <Text variant="small" className="text-gray-700">
              별점 <span className="text-danger-500">*</span>
            </Text>
            <Controller
              name="rating"
              control={control}
              render={({ field }) => (
                <Rating value={field.value} onChange={field.onChange} />
              )}
            />
          </div>

          <div className="flex flex-col gap-3">
            <Textarea
              label="리뷰 내용"
              isRequired
              placeholder="스터디에 대한 솔직한 후기를 남겨주세요..."
              {...register('reviewText', { required: '리뷰를 작성해주세요.' })}
              errorText={errors.reviewText?.message}
            />
          </div>
        </form>
      </ModalBody>

      {MODAL_PRESETS.reviewWrite.footer({
        onClose: onClose,
        onConfirm: handleSubmit(handleConfirm),
      })}
    </BaseModal>
  )
}
