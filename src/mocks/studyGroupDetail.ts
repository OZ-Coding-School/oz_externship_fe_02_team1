import { v4 as uuidv4 } from 'uuid'

import { Images } from '@assets'
import { formatTimeToHHMM, formatToYMD } from '@utils'

import type {
  LectureBase,
  Review,
  ScheduleDetail,
  StudyGroupDetail,
  StudyGroupMemberList,
  StudyLogListItem,
} from '@models'

export const studyGroupLecture: LectureBase[] = [
  {
    id: uuidv4(),
    title: 'React 완벽 마스터 강의',
    instructor: '김개발',
  },
  {
    id: uuidv4(),
    title: 'Next.js 실전 가이드',
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

export const studyGroupSchedule: ScheduleDetail[] = [
  {
    id: 1,
    title: '코드 리뷰 세션',
    objective: '코드 리뷰하는 방법 학습',
    sessionDate: formatToYMD(new Date('2025-09-13')),
    startTime: formatTimeToHHMM(new Date('2025-09-13T18:30:00')) ?? '',
    endTime: formatTimeToHHMM(new Date('2025-09-13T20:30:00')) ?? '',
    studyGroupId: 1,
    createdAt: new Date('2025-09-13T18:30:00').toISOString(),
    participants: [
      {
        memberId: 1,
        user: {
          id: 1,
          nickname: '김개발',
          isLeader: true,
        },
      },
      {
        memberId: 2,
        user: {
          id: 2,
          nickname: '박리액트',
          isLeader: false,
        },
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
    studyGroupId: 1,
    createdAt: new Date('2025-09-13T18:30:00').toISOString(),
    participants: [
      {
        memberId: 3,
        user: {
          id: 3,
          nickname: '이프론트',
          isLeader: false,
        },
      },
      {
        memberId: 4,
        user: {
          id: 4,
          nickname: '최자바',
          isLeader: false,
        },
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
    studyGroupId: 1,
    createdAt: new Date('2025-09-13T18:30:00').toISOString(),
    participants: [
      {
        memberId: 1,
        user: {
          id: 1,
          nickname: '김개발',
          isLeader: true,
        },
      },
      {
        memberId: 6,
        user: {
          id: 6,
          nickname: '윤컴포넌트',
          isLeader: false,
        },
      },
      {
        memberId: 7,
        user: {
          id: 7,
          nickname: '조훅스',
          isLeader: false,
        },
      },
      {
        memberId: 8,
        user: {
          id: 8,
          nickname: '서스테이트',
          isLeader: false,
        },
      },
    ],
    updatedAt: new Date('2025-09-13T18:30:00').toISOString(),
  },
]

export const studyGroupReview: Review[] = [
  {
    id: 1,
    userId: 1,
    studyGroupId: 1,
    rating: '5_OUT_OF_5_STARS',
    content:
      '정말 유익한 스터디였습니다. 체계적인 커리큘럼과 좋은 동료들 덕분에 많이 배울 수 있었어요!',
    updatedAt: new Date('2025-09-10T19:00:00').toISOString(),
  },
  {
    id: 2,
    userId: 2,
    studyGroupId: 1,
    rating: '4_OUT_OF_5_STARS',
    content:
      '스터디 리더님이 열정적으로 이끌어주셔서 끝까지 완주할 수 있었습니다. 다만 난이도가 조금 높았어요.',
    updatedAt: new Date('2025-09-11T19:00:00').toISOString(),
  },
  {
    id: 3,
    userId: 3,
    studyGroupId: 1,
    rating: '5_OUT_OF_5_STARS',
    content:
      '동료들과의 협업 프로젝트가 특히 도움이 되었습니다. 실무 경험을 쌓을 수 있어서 좋았어요.',
    updatedAt: new Date('2025-09-12T19:00:00').toISOString(),
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

export const studyGroups: StudyGroupDetail[] = [
  // 진행중 스터디
  {
    uuid: uuidv4(),
    name: 'React 실무 프로젝트 스터디',
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
  },
  {
    uuid: uuidv4(),
    name: 'TypeScript 마스터 스터디',
    imgUrl: Images.studyGroupDefault,
    startAt: new Date('2024-05-10').toISOString(),
    endAt: new Date('2024-07-20').toISOString(),
    maxHeadcount: 15,
    currentHeadcount: 12,
    status: '진행중',
    leader: { ...studyGroupMember[1], profileImage: undefined },
    members: studyGroupMember.map((member, index) => ({
      ...member,
      isLeader: index === 1,
    })),
    lectures: studyGroupLecture.map((lecture) => ({
      ...lecture,
      thumbnailImg: Images.studyGroupDefault,
      urlLink: '/',
    })),
  },
  {
    uuid: uuidv4(),
    name: 'Next.js 기초 다지기',
    imgUrl: Images.studyGroupDefault,
    startAt: new Date('2024-06-01').toISOString(),
    endAt: new Date('2024-08-15').toISOString(),
    maxHeadcount: 8,
    currentHeadcount: 6,
    status: '진행중',
    leader: { ...studyGroupMember[2], profileImage: undefined },
    members: studyGroupMember.map((member, index) => ({
      ...member,
      isLeader: index === 2,
    })),
    lectures: studyGroupLecture.map((lecture) => ({
      ...lecture,
      thumbnailImg: Images.studyGroupDefault,
      urlLink: '/',
    })),
  },

  // 완료된 스터디
  {
    uuid: uuidv4(),
    name: 'Node.js 서버 개발 스터디',
    imgUrl: Images.studyGroupDefault,
    startAt: new Date('2023-09-01').toISOString(),
    endAt: new Date('2023-11-30').toISOString(),
    maxHeadcount: 12,
    currentHeadcount: 12,
    status: '종료됨',
    leader: { ...studyGroupMember[3], profileImage: undefined },
    members: studyGroupMember.map((member, index) => ({
      ...member,
      isLeader: index === 3,
    })),
    lectures: studyGroupLecture.map((lecture) => ({
      ...lecture,
      thumbnailImg: Images.studyGroupDefault,
      urlLink: '/',
    })),
  },
  {
    uuid: uuidv4(),
    name: 'JavaScript 알고리즘 스터디',
    imgUrl: Images.studyGroupDefault,
    startAt: new Date('2023-06-01').toISOString(),
    endAt: new Date('2023-08-15').toISOString(),
    maxHeadcount: 20,
    currentHeadcount: 18,
    status: '종료됨',
    leader: { ...studyGroupMember[4], profileImage: undefined },
    members: studyGroupMember.map((member, index) => ({
      ...member,
      isLeader: index === 4,
    })),
    lectures: studyGroupLecture.map((lecture) => ({
      ...lecture,
      thumbnailImg: Images.studyGroupDefault,
      urlLink: '/',
    })),
  },
  {
    uuid: uuidv4(),
    name: 'UI/UX 디자인 스터디',
    imgUrl: Images.studyGroupDefault,
    startAt: new Date('2023-01-10').toISOString(),
    endAt: new Date('2023-03-30').toISOString(),
    maxHeadcount: 6,
    currentHeadcount: 6,
    status: '종료됨',
    leader: { ...studyGroupMember[5], profileImage: undefined },
    members: studyGroupMember.map((member, index) => ({
      ...member,
      isLeader: index === 5,
    })),
    lectures: studyGroupLecture.map((lecture) => ({
      ...lecture,
      thumbnailImg: Images.studyGroupDefault,
      urlLink: '/',
    })),
  },
]
