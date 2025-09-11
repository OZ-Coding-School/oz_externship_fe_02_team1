import {
  StudyGroupHeader,
  StudyGroupInfo,
  StudyGroupLecture,
} from '@components'

import type { StudyGroup, StudyGroupLectureList } from '@models'

// 예시 더미 데이터
const studyGroupLecture: StudyGroupLectureList[] = [
  {
    title: 'React 완벽 마스터 강의',
    instructor: '김개발',
  },
  {
    title: 'Next.js 실전 가이드',
    instructor: '박프론트',
  },
]
const studyGroup: StudyGroup = {
  studyGroupName: 'React 실무 프로젝트 스터디',
  currentMemberCount: 8,
  maxMemberCount: 10,
  startDate: new Date('2024-02-01'),
  lastDate: new Date('2024-04-30'),
  lecture: studyGroupLecture,
}

const currentUserRole: 'leader' | 'member' | 'guest' = 'leader'
const isMember = true

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
        <div className="col-span-2"></div>
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
        </div>
      </div>
    </>
  )
}
