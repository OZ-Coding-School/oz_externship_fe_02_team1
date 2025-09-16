import MODAL_PRESETS from '@components/common/modal/ModalPresets'
import {
  BaseModal,
  ModalBody,
  Input,
  Textarea,
  DateInput,
  Card,
  Badge,
  Text,
} from '@components'
import { studyGroup } from '@mocks/studyGroupDetail'
import { useState } from 'react'

interface AddScheduleModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AddScheduleModal({
  isOpen,
  onClose,
}: AddScheduleModalProps) {
  const [selectedMembers, setSelectedMembers] = useState<string[]>([])

  const handleConfirm = () => {
    // TODO: Implement confirm logic
    onClose()
  }

  const handleCheckboxChange = (name: string) => {
    setSelectedMembers(
      (prev) =>
        prev.includes(name)
          ? prev.filter((member) => member !== name)
          : [...prev, name] // 추가
    )
  }

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} size="md">
      {MODAL_PRESETS.scheduleAdd.header({
        onClose: onClose,
        title: '새 스케줄 추가',
      })}

      <ModalBody>
        <form className="space-y-6">
          <Input
            label="스케줄명"
            placeholder="스케줄 제목을 입력하세요"
            isRequired
          />

          <Textarea
            label="스터디 목표"
            placeholder="이번 스터디에서 달성하곶 하는 목표를 입력하세요"
            isRequired
          />

          <DateInput label="스터디 날짜" placeholder="-/-/-" required />

          <div className="flex gap-4">
            <Input label="시작 시간" type="time" isRequired />
            <Input label="종료 시간" type="time" isRequired />
          </div>

          <div>
            <Text variant="small" className="mb-1.5 block text-gray-700">
              참여자 선택 <span className="text-danger-500">*</span>
            </Text>
            <div className="flex flex-col gap-2">
              <Card
                title=""
                titleClassName="p-0"
                cardClassName="p-4 gap-3 border-gray-300"
              >
                {studyGroup.member.map((el) => (
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedMembers.includes(el.name)}
                      onChange={() => handleCheckboxChange(el.name)}
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
              </Card>
              <Text variant="extraSmall" className="text-gray-500">
                선택된 참여자: {selectedMembers.length}명
              </Text>
            </div>
          </div>
        </form>
      </ModalBody>

      {MODAL_PRESETS.scheduleAdd.footer({
        onClose: onClose,
        onConfirm: handleConfirm,
      })}
    </BaseModal>
  )
}
