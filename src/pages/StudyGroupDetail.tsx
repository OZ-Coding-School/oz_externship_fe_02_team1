import {
  StudyGroupHeader,
  StudyGroupInfo,
  StudyGroupLecture,
  StudyGroupMember,
  StudyGroupSchedule,
} from '@components'
import { studyGroup, currentUserRole, isMember } from '@mocks/studyGroupDetail'

export default function StudyGroupDetail() {
  return (
    <>
      <StudyGroupHeader
        studyGroupName={studyGroup.studyGroupName}
        currentMemberCount={studyGroup.currentMemberCount}
        maxMemberCount={studyGroup.maxMemberCount}
        startDate={studyGroup.startDate}
        lastDate={studyGroup.lastDate}
        currentUserRole={currentUserRole}
        isMember={isMember}
      />
      <div className="mt-8 grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <StudyGroupSchedule />
        </div>
        <div className="flex flex-col gap-6">
          <StudyGroupInfo
            currentMemberCount={studyGroup.currentMemberCount}
            maxMemberCount={studyGroup.maxMemberCount}
            startDate={studyGroup.startDate}
            lastDate={studyGroup.lastDate}
          />
          {studyGroup.lecture && (
            <StudyGroupLecture lecture={studyGroup.lecture} />
          )}
          <StudyGroupMember member={studyGroup.member} />
        </div>
      </div>
    </>
  )
}
