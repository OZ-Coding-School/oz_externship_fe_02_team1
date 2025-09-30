import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline'
import { useParams } from 'react-router'

import {
  Avatar,
  Badge,
  BaseModal,
  H5,
  ModalBody,
  ScheduleDetailDiv,
  Text,
  MODAL_PRESETS,
  EditScheduleModal,
  LoadingState,
  ErrorState,
} from '@components'
import {
  useModal,
  useScheduleDetailQeury,
  useScheduleMutations,
  useToast,
} from '@hooks'
import { studyGroupList } from '@mocks/datas/studygroupList'
import { formatDate, formatTime } from '@utils'

interface ScheduleDetailModalProps {
  scheduleId: number
  isOpen: boolean
  onClose: () => void
}

export default function ScheduleDetailModal({
  scheduleId,
  isOpen,
  onClose,
}: ScheduleDetailModalProps) {
  const {
    isOpen: isEditModalOpen,
    openModal: openEditModal,
    closeModal: closeEditModal,
  } = useModal()

  const { groupId } = useParams<{ groupId: string }>()

  const {
    data: schedule,
    isLoading,
    isError,
    refetch,
  } = useScheduleDetailQeury({
    scheduleId,
    studyGroupUuid: groupId || '',
  })

  const { deleteScheduleMutation } = useScheduleMutations(groupId || '')
  const { toast } = useToast()

  if (!isOpen) {
    return null
  }

  const currentStudyGroup = studyGroupList.find(
    (group) => group.uuid === groupId
  )

  if (!currentStudyGroup) {
    return null
  }

  const mockParticipants = [
    currentStudyGroup.members?.[0],
    currentStudyGroup.members?.[1],
    currentStudyGroup.members?.[3],
    currentStudyGroup.members?.[4],
  ].filter(Boolean) as typeof currentStudyGroup.members

  const handleDelete = async () => {
    if (window.confirm('정말로 이 스케줄을 삭제하시겠습니까?')) {
      try {
        await deleteScheduleMutation.mutateAsync(scheduleId)
        toast({
          title: '스케줄이 성공적으로 삭제되었습니다.',
          message: '',
          type: 'success',
        })
        onClose()
      } catch {
        toast({
          title: '스케줄을 삭제하지 못했습니다.',
          message: '다시 시도해주세요.',
          type: 'error',
        })
      }
    }
  }

  return (
    <>
      <BaseModal
        isOpen={isOpen}
        onClose={onClose}
        size={MODAL_PRESETS.scheduleDetail.size}
        labelledById="modal-title"
      >
        {MODAL_PRESETS.scheduleDetail.header({
          onClose: onClose,
          title: '스케줄 상세',
        })}

        {isLoading && <LoadingState />}
        {isError && (
          <div className="flex items-center justify-center py-20">
            <ErrorState onRetry={refetch} />
          </div>
        )}
        {!isLoading && !isError && schedule && (
          <>
            <ModalBody>
              {schedule && (
                <div className="space-y-6">
                  <H5>{schedule.title}</H5>

                  <ScheduleDetailDiv title="스터디 목표">
                    <div className="rounded-lg bg-gray-50 p-4">
                      {schedule.objective}
                    </div>
                  </ScheduleDetailDiv>

                  <div className="grid grid-cols-2 gap-4">
                    <ScheduleDetailDiv title="스터디 날짜">
                      <div className="flex gap-2">
                        <CalendarIcon width={16} className="text-gray-400" />
                        <Text>
                          {formatDate(new Date(schedule.sessionDate))}
                        </Text>
                      </div>
                    </ScheduleDetailDiv>
                    <ScheduleDetailDiv title="스터디 시간">
                      <div className="flex gap-2">
                        <ClockIcon width={16} className="text-gray-400" />
                        <Text>
                          {formatTime(
                            new Date(`2000-01-01T${schedule.startTime}`)
                          )}
                          &nbsp;~&nbsp;
                          {formatTime(
                            new Date(`2000-01-01T${schedule.endTime}`)
                          )}
                        </Text>
                      </div>
                    </ScheduleDetailDiv>
                  </div>

                  <ScheduleDetailDiv
                    title={`참여자 목록 (${mockParticipants?.length}명)`}
                  >
                    <ul className="flex flex-col gap-3 rounded-lg border border-gray-200 p-4">
                      {mockParticipants?.length ? (
                        <>
                          {mockParticipants.map((participant) => (
                            <li
                              key={participant.uuid}
                              className="flex items-center"
                            >
                              <Avatar
                                src={participant.profileImage}
                                size="sm"
                                alt={participant.nickname}
                              />
                              <Text variant="small" className="mr-2 ml-3">
                                {participant.nickname}
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
                            </li>
                          ))}
                        </>
                      ) : (
                        <Text>현재 이 스케줄에 참여 중인 인원이 없습니다.</Text>
                      )}
                    </ul>
                  </ScheduleDetailDiv>
                </div>
              )}
            </ModalBody>
            {MODAL_PRESETS.scheduleDetail.footer({
              onClose: onClose,
              onConfirm: handleDelete,
              createDate: formatDate(new Date(schedule.createdAt)),
              onEdit: () => {
                openEditModal()
              },
            })}
          </>
        )}
      </BaseModal>

      {schedule && (
        <EditScheduleModal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          schedule={schedule}
        />
      )}
    </>
  )
}
