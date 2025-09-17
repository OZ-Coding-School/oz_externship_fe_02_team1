import { useState } from 'react'
import { studyGroup } from '@mocks/studyGroupDetail'
import { formatToYMD } from '@utils'
import {
  BaseModal,
  MODAL_PRESETS,
  ModalBody,
  Rating,
  Text,
  Textarea,
} from '@components'

interface ReviewWriteModalProps {
  isOpen: boolean
  onClose: () => void
  confirm: () => void
}

export default function ReviewWriteModal({
  isOpen,
  onClose,
  confirm,
}: ReviewWriteModalProps) {
  const [rating, setRating] = useState(0)

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
          <Text className="font-medium text-gray-900">
            {studyGroup.studyGroupName}
          </Text>
          <Text variant="small" className="text-gray-600">
            {formatToYMD(studyGroup.startDate)}&nbsp;~&nbsp;
            {formatToYMD(studyGroup.lastDate)}
          </Text>
        </div>

        <div className="flex flex-col gap-3">
          <Text variant="small" className="text-gray-700">
            별점 <span className="text-danger-500">*</span>
          </Text>
          <Rating value={rating} onChange={setRating} />
        </div>

        <div className="flex flex-col gap-3">
          <Textarea label="리뷰 내용" isRequired />
        </div>
      </ModalBody>

      {MODAL_PRESETS.reviewWrite.footer({
        onClose: onClose,
        onConfirm: confirm,
      })}
    </BaseModal>
  )
}
