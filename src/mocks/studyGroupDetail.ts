import { Images } from '@assets'

import type {
  StudyGroup,
  StudyGroupLectureList,
  StudyGroupLogList,
  StudyGroupMemberList,
  StudyGroupScheduleList,
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
    date: new Date('2024-02-16T05:30:00'),
    authorId: 1,
    attachment: ['1.pdf', '2.pdf'],
  },
  {
    id: 2,
    title: 'TypeScript 타입 시스템 학습',
    date: new Date('2024-02-19T04:15:00'),
    authorId: 2,
    attachment: ['1.pdf'],
  },
  {
    id: 3,
    title: 'Next.js 13 App Router 실습',
    date: new Date('2024-02-21T06:45:00'),
    authorId: 3,
    attachment: ['1.pdf', '2.pdf'],
  },
]

export const studyGroupSchedule: StudyGroupScheduleList[] = [
  {
    id: 1,
    title: '코드 리뷰 세션',
    goal: '코드 리뷰하는 방법 학습',
    date: new Date('2025-09-13'),
    startTime: new Date('2025-09-13T18:30:00'),
    endTime: new Date('2025-09-13T20:30:00'),
    participants: [studyGroupMember[0], studyGroupMember[1]],
  },
  {
    id: 2,
    title: 'React Testing 스터디',
    goal: 'React Testing 도구 사용 방법 학습',
    date: new Date('2025-09-15'),
    startTime: new Date('2025-09-15T20:00:00'),
    endTime: new Date('2025-09-15T22:00:00'),
    participants: [studyGroupMember[2], studyGroupMember[3]],
  },
  {
    id: 3,
    title: 'React Hooks 심화 학습',
    goal: 'useState, useEffect, useContext 등 주요 Hook들의 동작 원리와 최적화 방법 학습',
    date: new Date('2025-09-16'),
    startTime: new Date('2025-09-16T19:00:00'),
    endTime: new Date('2025-09-16T21:00:00'),
    participants: [
      studyGroupMember[0],
      studyGroupMember[5],
      studyGroupMember[6],
      studyGroupMember[7],
    ],
  },
]

export const studyGroup: StudyGroup = {
  backgroundImage: Images.studyGroupDefault,
  studyGroupName: 'React 실무 프로젝트 스터디',
  description: 'React 실무 프로젝트 스터디입니다.',
  currentMemberCount: 8,
  maxMemberCount: 10,
  startDate: new Date('2024-02-01'),
  lastDate: new Date('2024-04-30'),
  lecture: studyGroupLecture,
  member: studyGroupMember,
  studyLog: studyGroupLog,
  schedule: studyGroupSchedule,
}

export const currentUserRole: 'leader' | 'member' | 'guest' = 'leader'
export const isMember = true
