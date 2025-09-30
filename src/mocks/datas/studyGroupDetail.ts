import { v4 as uuidv4 } from 'uuid'

import { Images } from '@assets'
import { formatTimeToHHMM, formatToYMD } from '@utils'

import type { CreateScheduleResponse } from '@api'
import type {
  LectureBase,
  StudyGroupMemberList,
  StudyLogListItem,
} from '@models'

export const studyGroupLecture: LectureBase[] = [
  {
    id: uuidv4(),
    lectureTitle: 'React 완벽 마스터 강의',
    instructor: '김개발',
  },
  {
    id: uuidv4(),
    lectureTitle: 'Next.js 실전 가이드',
    instructor: '박프론트',
  },
]

export const studyGroupMember: StudyGroupMemberList[] = [
  {
    uuid: uuidv4(),
    nickname: '김개발',
    isLeader: true,
  },
  {
    uuid: uuidv4(),
    nickname: '박리액트',
    isLeader: false,
  },
  {
    uuid: uuidv4(),
    nickname: '이프론트',
    isLeader: false,
  },
  {
    uuid: uuidv4(),
    nickname: '최자바',
    isLeader: false,
  },
  {
    uuid: uuidv4(),
    nickname: '한스크립트',
    isLeader: false,
  },
  {
    uuid: uuidv4(),
    nickname: '윤컴포넌트',
    isLeader: false,
  },
  {
    uuid: uuidv4(),
    nickname: '조훅스',
    isLeader: false,
  },
  {
    uuid: uuidv4(),
    nickname: '서스테이트',
    isLeader: false,
  },
]

export const studyGroupLog: StudyLogListItem[] = [
  {
    id: 1,
    title: 'React Hooks 실습 정리',
    author: {
      id: 1,
      nickname: '김개발',
    },
    createdAt: '2024-02-16T05:30:00',
  },
  {
    id: 2,
    title: 'TypeScript 타입 시스템 학습',
    author: {
      id: 2,
      nickname: '박리액트',
    },
    createdAt: '2024-02-19T04:15:00',
  },
  {
    id: 3,
    title: 'Next.js 13 App Router 실습',
    author: {
      id: 3,
      nickname: '이프론트',
    },
    createdAt: '2024-02-21T06:45:00',
  },
]

export const studyGroupSchedule: CreateScheduleResponse[] = [
  {
    id: 1,
    title: '코드 리뷰 세션',
    objective: '코드 리뷰하는 방법 학습',
    sessionDate: formatToYMD(new Date('2025-09-13')),
    startTime: formatTimeToHHMM(new Date('2025-09-13T18:30:00')) ?? '',
    endTime: formatTimeToHHMM(new Date('2025-09-13T20:30:00')) ?? '',
    studyGroupUuid: uuidv4(),
    studyGroupName: 'React 스터디 그룹',
    createdAt: new Date('2025-09-13T18:30:00').toISOString(),
    participants: [
      {
        userId: 1,
        nickname: '김개발',
        isLeader: true,
      },
      {
        userId: 2,
        nickname: '박리액트',
        isLeader: false,
      },
    ],
    updatedAt: new Date('2025-09-13T18:30:00').toISOString(),
  },
  {
    id: 2,
    title: 'React Testing 스터디',
    objective: 'React Testing 도구 사용 방법 학습',
    sessionDate: formatToYMD(new Date('2025-09-15')),
    startTime: formatTimeToHHMM(new Date('2025-09-15T20:00:00')) ?? '',
    endTime: formatTimeToHHMM(new Date('2025-09-15T22:00:00')) ?? '',
    studyGroupUuid: uuidv4(),
    studyGroupName: 'React 스터디 그룹',
    createdAt: new Date('2025-09-13T18:30:00').toISOString(),
    participants: [
      {
        userId: 3,
        nickname: '이프론트',
        isLeader: false,
      },
      {
        userId: 4,
        nickname: '최자바',
        isLeader: false,
      },
    ],
    updatedAt: new Date('2025-09-13T18:30:00').toISOString(),
  },
  {
    id: 3,
    title: 'React Hooks 심화 학습',
    objective:
      'useState, useEffect, useContext 등 주요 Hook들의 동작 원리와 최적화 방법 학습',
    sessionDate: formatToYMD(new Date('2025-09-16')),
    startTime: formatTimeToHHMM(new Date('2025-09-16T19:00:00')) ?? '',
    endTime: formatTimeToHHMM(new Date('2025-09-16T21:00:00')) ?? '',
    studyGroupUuid: uuidv4(),
    studyGroupName: 'React 스터디 그룹',
    createdAt: new Date('2025-09-13T18:30:00').toISOString(),
    participants: [
      {
        userId: 1,
        nickname: '김개발',
        isLeader: true,
      },
      {
        userId: 6,
        nickname: '윤컴포넌트',
        isLeader: false,
      },
      {
        userId: 7,
        nickname: '조훅스',
        isLeader: false,
      },
      {
        userId: 8,
        nickname: '서스테이트',
        isLeader: false,
      },
    ],
    updatedAt: new Date('2025-09-13T18:30:00').toISOString(),
  },
]

export const studyGroup = {
  uuid: uuidv4(),
  name: 'React 실무 프로젝트 스터디',
  introduction: 'React 실무 프로젝트 스터디입니다.',
  imgUrl: Images.studyGroupDefault,
  startAt: new Date('2024-02-01').toISOString(),
  endAt: new Date('2024-04-30').toISOString(),
  maxHeadcount: 10,
  currentHeadcount: 8,
  status: '진행중',
  leader: { ...studyGroupMember[0], profileImage: undefined },
  members: studyGroupMember.map((member, index) => ({
    ...member,
    isLeader: index === 0,
  })),
  lectures: studyGroupLecture.map((lecture) => ({
    ...lecture,
    thumbnailImg: Images.studyGroupDefault,
    urlLink: '/',
  })),
}
