import {
  StudyGroupHeader,
  StudyGroupInfo,
  StudyGroupLecture,
  StudyGroupLogList,
  StudyGroupMember,
  StudyGroupSchedule,
} from '@components'
import {
  studyGroup,
  studyGroupLog,
  studyGroupSchedule,
} from '@mocks/datas/studyGroupDetail'

export default function StudyGroupDetail() {
  return (
    <>
      <StudyGroupHeader
        name={studyGroup.name}
        currentHeadcount={studyGroup.currentHeadcount}
        maxHeadcount={studyGroup.maxHeadcount}
        startAt={studyGroup.startAt}
        endAt={studyGroup.endAt}
      />
      <div className="mt-6 flex flex-col gap-6 lg:mt-8 lg:grid lg:grid-cols-3">
        <div className="col-span-2 flex flex-col gap-6 lg:gap-8">
          <StudyGroupSchedule schedule={studyGroupSchedule} />
          <StudyGroupLogList
            member={studyGroup.members}
            studyLog={studyGroupLog}
          />
        </div>
        <div className="flex flex-col gap-6">
          <StudyGroupInfo
            currentHeadcount={studyGroup.currentHeadcount}
            maxHeadcount={studyGroup.maxHeadcount}
            startAt={studyGroup.startAt}
            endAt={studyGroup.endAt}
          />
          {studyGroup.lectures && (
            <StudyGroupLecture lectures={studyGroup.lectures} />
          )}
          <StudyGroupMember members={studyGroup.members} />
        </div>
      </div>
    </>
  )
}
