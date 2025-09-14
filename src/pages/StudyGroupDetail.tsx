import {
  StudyGroupHeader,
  StudyGroupInfo,
  StudyGroupLecture,
  StudyGroupLogList,
  StudyGroupMember,
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
      <div className="mt-8 gap-8 lg:grid lg:grid-cols-3">
        <div className="col-span-2">
          <StudyGroupLogList
            member={studyGroup.member}
            studyLog={studyGroup.studyLog}
          />
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
