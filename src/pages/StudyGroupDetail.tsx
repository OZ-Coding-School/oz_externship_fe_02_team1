import { useParams } from 'react-router-dom'
import {
  LoadingState,
  StudyGroupHeader,
  StudyGroupInfo,
  StudyGroupLecture,
  StudyGroupLogList,
  StudyGroupMember,
  StudyGroupSchedule,
} from '@components'
import { useStudyGroupDetail } from '@hooks'

export default function StudyGroupDetail() {
  const { groupId } = useParams<{ groupId: string }>()

  const { data: studyGroupData, isLoading } = useStudyGroupDetail(groupId || '')

  if (isLoading) {
    return <LoadingState />
  }

  if (!studyGroupData) {
    // TODO: 404 컴포넌트
    return <div>스터디 그룹을 찾을 수 없습니다.</div>
  }

  const {
    name,
    current_headcount: currentHeadcount,
    max_headcount: maxHeadcount,
    start_at: startAt,
    end_at: endAt,
    members,
    lectures,
  } = studyGroupData

  const studyGroupLog: any[] = []
  const studyGroupSchedule: any[] = []

  return (
    <>
      <StudyGroupHeader
        name={name}
        currentHeadcount={currentHeadcount}
        maxHeadcount={maxHeadcount}
        startAt={startAt}
        endAt={endAt}
      />
      <div className="mt-6 flex flex-col gap-6 lg:mt-8 lg:grid lg:grid-cols-3">
        <div className="col-span-2 flex flex-col gap-6 lg:gap-8">
          <StudyGroupSchedule schedule={studyGroupSchedule} />
          <StudyGroupLogList member={members} studyLog={studyGroupLog} />
        </div>
        <div className="flex flex-col gap-6">
          <StudyGroupInfo
            currentHeadcount={currentHeadcount}
            maxHeadcount={maxHeadcount}
            startAt={startAt}
            endAt={endAt}
          />
          {lectures && <StudyGroupLecture lectures={lectures} />}
          <StudyGroupMember members={members} />
        </div>
      </div>
    </>
  )
}
