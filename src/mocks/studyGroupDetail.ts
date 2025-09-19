import { Images } from '@assets'
import { v4 as uuidv4 } from 'uuid'

import type {
  LectureBase,
  Review,
  ScheduleDetail,
  StudyGroupDetail,
  StudyGroupMemberList,
  StudyLogListItem,
} from '@models'
import { formatTimeToHHMM, formatToYMD } from '@utils'

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
    is_leader: true,
  },
  {
    uuid: uuidv4(),
    nickname: '박리액트',
    is_leader: false,
  },
  {
    uuid: uuidv4(),
    nickname: '이프론트',
    is_leader: false,
  },
  {
    uuid: uuidv4(),
    nickname: '최자바',
    is_leader: false,
  },
  {
    uuid: uuidv4(),
    nickname: '한스크립트',
    is_leader: false,
  },
  {
    uuid: uuidv4(),
    nickname: '윤컴포넌트',
    is_leader: false,
  },
  {
    uuid: uuidv4(),
    nickname: '조훅스',
    is_leader: false,
  },
  {
    uuid: uuidv4(),
    nickname: '서스테이트',
    is_leader: false,
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
    created_at: '2024-02-16T05:30:00',
  },
  {
    id: 2,
    title: 'TypeScript 타입 시스템 학습',
    author: {
      id: 2,
      nickname: '박리액트',
    },
    created_at: '2024-02-19T04:15:00',
  },
  {
    id: 3,
    title: 'Next.js 13 App Router 실습',
    author: {
      id: 3,
      nickname: '이프론트',
    },
    created_at: '2024-02-21T06:45:00',
  },
]

export const studyGroupSchedule: ScheduleDetail[] = [
  {
    id: 1,
    title: '코드 리뷰 세션',
    objective: '코드 리뷰하는 방법 학습',
    session_date: formatToYMD(new Date('2025-09-13')),
    start_time: formatTimeToHHMM(new Date('2025-09-13T18:30:00')) ?? '',
    end_time: formatTimeToHHMM(new Date('2025-09-13T20:30:00')) ?? '',
    study_group_id: 1,
    created_at: new Date('2025-09-13T18:30:00').toISOString(),
    participants: [
      {
        member_id: 1,
        user: {
          id: 1,
          nickname: '김개발',
          is_leader: true,
        },
      },
      {
        member_id: 2,
        user: {
          id: 2,
          nickname: '박리액트',
          is_leader: false,
        },
      },
    ],
    updated_at: new Date('2025-09-13T18:30:00').toISOString(),
  },
  {
    id: 2,
    title: 'React Testing 스터디',
    objective: 'React Testing 도구 사용 방법 학습',
    session_date: formatToYMD(new Date('2025-09-15')),
    start_time: formatTimeToHHMM(new Date('2025-09-15T20:00:00')) ?? '',
    end_time: formatTimeToHHMM(new Date('2025-09-15T22:00:00')) ?? '',
    study_group_id: 1,
    created_at: new Date('2025-09-13T18:30:00').toISOString(),
    participants: [
      {
        member_id: 3,
        user: {
          id: 3,
          nickname: '이프론트',
          is_leader: false,
        },
      },
      {
        member_id: 4,
        user: {
          id: 4,
          nickname: '최자바',
          is_leader: false,
        },
      },
    ],
    updated_at: new Date('2025-09-13T18:30:00').toISOString(),
  },
  {
    id: 3,
    title: 'React Hooks 심화 학습',
    objective:
      'useState, useEffect, useContext 등 주요 Hook들의 동작 원리와 최적화 방법 학습',
    session_date: formatToYMD(new Date('2025-09-16')),
    start_time: formatTimeToHHMM(new Date('2025-09-16T19:00:00')) ?? '',
    end_time: formatTimeToHHMM(new Date('2025-09-16T21:00:00')) ?? '',
    study_group_id: 1,
    created_at: new Date('2025-09-13T18:30:00').toISOString(),
    participants: [
      {
        member_id: 1,
        user: {
          id: 1,
          nickname: '김개발',
          is_leader: true,
        },
      },
      {
        member_id: 6,
        user: {
          id: 6,
          nickname: '윤컴포넌트',
          is_leader: false,
        },
      },
      {
        member_id: 7,
        user: {
          id: 7,
          nickname: '조훅스',
          is_leader: false,
        },
      },
      {
        member_id: 8,
        user: {
          id: 8,
          nickname: '서스테이트',
          is_leader: false,
        },
      },
    ],
    updated_at: new Date('2025-09-13T18:30:00').toISOString(),
  },
]

export const studyGroupReview: Review[] = [
  {
    id: 1,
    user_id: 1,
    study_group_id: 1,
    rating: '5_OUT_OF_5_STARS',
    content:
      '정말 유익한 스터디였습니다. 체계적인 커리큘럼과 좋은 동료들 덕분에 많이 배울 수 있었어요!',
    updated_at: new Date('2025-09-10T19:00:00').toISOString(),
  },
  {
    id: 2,
    user_id: 2,
    study_group_id: 1,
    rating: '4_OUT_OF_5_STARS',
    content:
      '스터디 리더님이 열정적으로 이끌어주셔서 끝까지 완주할 수 있었습니다. 다만 난이도가 조금 높았어요.',
    updated_at: new Date('2025-09-11T19:00:00').toISOString(),
  },
  {
    id: 3,
    user_id: 3,
    study_group_id: 1,
    rating: '5_OUT_OF_5_STARS',
    content:
      '동료들과의 협업 프로젝트가 특히 도움이 되었습니다. 실무 경험을 쌓을 수 있어서 좋았어요.',
    updated_at: new Date('2025-09-12T19:00:00').toISOString(),
  },
]

export const studyGroup: StudyGroupDetail = {
  uuid: uuidv4(),
  name: 'React 실무 프로젝트 스터디',
  img_url: Images.studyGroupDefault,
  start_at: new Date('2024-02-01').toISOString(),
  end_at: new Date('2024-04-30').toISOString(),
  max_headcount: 10,
  current_headcount: 8,
  status: '진행중',
  leader: { ...studyGroupMember[0], profile_image: undefined },
  members: studyGroupMember.map((member, index) => ({
    ...member,
    is_leader: index === 0,
  })),
  lectures: studyGroupLecture.map((lecture) => ({
    ...lecture,
    thumbnail_img: Images.studyGroupDefault,
    url_link: '/',
  })),
}
