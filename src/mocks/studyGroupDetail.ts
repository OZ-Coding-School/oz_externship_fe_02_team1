import { Images } from '@assets'

import type {
  StudyGroup,
  StudyGroupLectureList,
  StudyGroupLogList,
  StudyGroupMemberList,
} from '@models'

export const studyGroupLecture: StudyGroupLectureList[] = [
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

export const studyGroupMember: StudyGroupMemberList[] = [
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

export const studyGroupLog: StudyGroupLogList[] = [
  {
    id: 1,
    title: 'React Hooks 실습 정리',
    authorId: 1,
    attachment: ['1.pdf', '2.pdf'],
  },
  {
    id: 2,
    title: 'TypeScript 타입 시스템 학습',
    authorId: 2,
    attachment: ['1.pdf'],
  },
  {
    id: 3,
    title: 'Next.js 13 App Router 실습',
    authorId: 3,
    attachment: ['1.pdf', '2.pdf'],
  },
]

export const studyGroup: StudyGroup = {
  studyGroupName: 'React 실무 프로젝트 스터디',
  currentMemberCount: 8,
  maxMemberCount: 10,
  startDate: new Date('2024-02-01'),
  lastDate: new Date('2024-04-30'),
  lecture: studyGroupLecture,
  member: studyGroupMember,
  studyLog: studyGroupLog,
}

export const currentUserRole: 'leader' | 'member' | 'guest' = 'leader'
export const isMember = true
