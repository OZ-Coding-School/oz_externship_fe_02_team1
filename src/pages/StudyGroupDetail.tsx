import { Images } from '@assets'
import {
  StudyGroupHeader,
  StudyGroupInfo,
  StudyGroupLecture,
  StudyGroupMember,
} from '@components'

import type {
  StudyGroup,
  StudyGroupLectureList,
  StudyGroupMemberList,
} from '@models'

// 예시 더미 데이터
const studyGroupLecture: StudyGroupLectureList[] = [
  {
    image: Images.studyGroupDefault,
    title: 'React 완벽 마스터 강의',
    instructor: '김개발',
    lectureUrl: '/',
  },
  {
    title: 'Next.js 실전 가이드',
    instructor: '박프론트',
    lectureUrl: '/',
  },
]
const studyGroupMember: StudyGroupMemberList[] = [
  {
    id: 1,
    name: '김개발',
    isLeader: true,
  },
  {
    id: 2,
    name: '박리액트',
    isLeader: false,
  },
  {
    id: 3,
    name: '이프론트',
    isLeader: false,
  },
  {
    id: 4,
    name: '최자바',
    isLeader: false,
  },
  {
    id: 5,
    name: '한스크립트',
    isLeader: false,
  },
  {
    id: 6,
    name: '윤컴포넌트',
    isLeader: false,
  },
  {
    id: 7,
    name: '조훅스',
    isLeader: false,
  },
  {
    id: 8,
    name: '서스테이트',
    isLeader: false,
  },
]

const studyGroup: StudyGroup = {
  studyGroupName: 'React 실무 프로젝트 스터디',
  currentMemberCount: 8,
  maxMemberCount: 10,
  startDate: new Date('2024-02-01'),
  lastDate: new Date('2024-04-30'),
  lecture: studyGroupLecture,
  member: studyGroupMember,
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
          <StudyGroupMember member={studyGroup.member} />
        </div>
      </div>
    </>
  )
}
