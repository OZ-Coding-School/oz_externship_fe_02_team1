import MODAL_PRESETS from '@components/common/modal/ModalPresets'
import {
  Avatar,
  Badge,
  BaseModal,
  H5,
  ModalBody,
  ScheduleDetailDiv,
  Text,
} from '@components'
import { studyGroupSchedule } from '@mocks/studyGroupDetail'
import { formatDate, formatTime } from '@utils'
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline'

interface scheduleDetailModalProps {
  isOpen: boolean
  close: () => void
  confirm: () => void
}

export default function ScheduleDetailModal({
  isOpen,
  close,
  confirm,
}: scheduleDetailModalProps) {
  const schedule = studyGroupSchedule[2]

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={close}
      size={MODAL_PRESETS.scheduleDetail.size}
      labelledById="modal-title"
    >
      {MODAL_PRESETS.scheduleDetail.header({
        onClose: close,
        title: '스터디 날짜 선택',
      })}

      <ModalBody className="space-y-6">
        <H5 className="text-gray-900">{schedule.title}</H5>

        <ScheduleDetailDiv title="스터디 목표">
          <div className="rounded-lg bg-gray-50 p-4">{schedule.goal}</div>
        </ScheduleDetailDiv>

        <div className="grid grid-cols-2 gap-4">
          <ScheduleDetailDiv title="스터디 날짜">
            <div className="flex gap-2">
              <CalendarIcon width={16} className="text-gray-400" />
              <Text className="text-gray-900">{formatDate(schedule.date)}</Text>
            </div>
          </ScheduleDetailDiv>
          <ScheduleDetailDiv title="스터디 시간">
            <div className="flex gap-2">
              <ClockIcon width={16} className="text-gray-400" />
              <Text className="text-gray-900">
                {formatTime(schedule.startTime)}&nbsp;~&nbsp;
                {formatTime(schedule.endTime)}
              </Text>
            </div>
          </ScheduleDetailDiv>
        </div>

        <ScheduleDetailDiv
          title={`참여자 목록 (${schedule.participants.length}명)`}
        >
          <div className="flex flex-col gap-3 rounded-lg border border-gray-200 p-4">
            {schedule.participants.map((participant) => (
              <div key={participant.id} className="flex items-center">
                <Avatar size="sm" alt={participant.name} />
                <Text variant="small" className="mr-2 ml-3 text-gray-900">
                  {participant.name}
                </Text>
                {participant.isLeader && (
                  <Badge
                    color="primary"
                    size="md"
                    className="rounded-sm !px-2 text-xs"
                  >
                    리더
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </ScheduleDetailDiv>
      </ModalBody>

      {MODAL_PRESETS.scheduleDetail.footer({
        onClose: close,
        onConfirm: confirm,
      })}
    </BaseModal>
  )
}
