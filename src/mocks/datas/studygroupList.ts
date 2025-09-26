import { v4 as uuidv4 } from 'uuid'

import { Images } from '@assets'

import { studyGroupLecture, studyGroupMember } from './studyGroupDetail'

import type { StudyGroupList } from '@models'

export const studyGroupList: StudyGroupList[] = [
  {
    id: 2,
    uuid: '663a40a5-8a96-442b-aac2-1a4b49598ba8',
    name: '모던 자바스크립트 딥다이브',
    currentHeadcount: 1,
    maxHeadcount: 10,
    isLeader: true,
    imgUrl: Images.studyGroupDefault,
    startAt: new Date('2025-09-27').toISOString(),
    endAt: new Date('2025-10-30').toISOString(),
    status: '진행중',
    lectures: studyGroupLecture.map((lecture) => ({
      ...lecture,
      thumbnailImg: Images.studyGroupDefault,
      urlLink: '/',
    })),
    leader: { ...studyGroupMember[0], profileImage: undefined },
    members: studyGroupMember.map((member, index) => ({
      ...member,
      isLeader: index === 0,
    })),
  },
  {
    id: 3,
    uuid: '80c02398-13ac-4d25-8773-b07587068f3e',
    name: 'React 실무 프로젝트 스터디',
    currentHeadcount: 1,
    maxHeadcount: 10,
    isLeader: false,
    imgUrl: Images.studyGroupDefault,
    startAt: new Date('2025-09-27').toISOString(),
    endAt: new Date('2025-10-30').toISOString(),
    status: '진행중',
    lectures: studyGroupLecture.map((lecture) => ({
      ...lecture,
      thumbnailImg: Images.studyGroupDefault,
      urlLink: '/',
    })),
    leader: { ...studyGroupMember[0], profileImage: undefined },
    members: studyGroupMember.map((member, index) => ({
      ...member,
      isLeader: index === 0,
    })),
  },
  {
    id: 4,
    uuid: '46aef94d-7a4c-443c-a668-cad263550342',
    name: 'JavaScript 알고리즘 스터디',
    currentHeadcount: 6,
    maxHeadcount: 8,
    isLeader: true,
    imgUrl: Images.studyGroupDefault,
    startAt: new Date('2025-10-20').toISOString(),
    endAt: new Date('2025-11-28').toISOString(),
    status: '진행중',
    lectures: studyGroupLecture.map((lecture) => ({
      ...lecture,
      thumbnailImg: Images.studyGroupDefault,
      urlLink: '/',
    })),
    leader: { ...studyGroupMember[0], profileImage: undefined },
    members: studyGroupMember.map((member, index) => ({
      ...member,
      isLeader: index === 0,
    })),
  },
  {
    uuid: uuidv4(),
    name: 'Node.js 서버 개발 스터디',
    currentHeadcount: 12,
    maxHeadcount: 12,
    isLeader: false,
    imgUrl: Images.studyGroupDefault,
    startAt: new Date('2023-09-01').toISOString(),
    endAt: new Date('2023-11-30').toISOString(),
    status: '종료됨',
    lectures: [
      {
        id: uuidv4(),
        lectureTitle: 'Express로 API 개발',
        instructor: '유노드',
      },
    ],
  },
  {
    uuid: uuidv4(),
    name: 'JavaScript 알고리즘 스터디',
    currentHeadcount: 18,
    maxHeadcount: 20,
    isLeader: true,
    imgUrl: Images.studyGroupDefault,
    startAt: new Date('2023-06-01').toISOString(),
    endAt: new Date('2023-08-15').toISOString(),
    status: '종료됨',
    lectures: [
      {
        id: uuidv4(),
        lectureTitle: '알고리즘 문제 풀이',
        instructor: '정알고',
      },
    ],
  },
  {
    uuid: uuidv4(),
    name: 'UI/UX 디자인 스터디',
    currentHeadcount: 6,
    maxHeadcount: 6,
    isLeader: false,
    imgUrl: Images.studyGroupDefault,
    startAt: new Date('2023-01-10').toISOString(),
    endAt: new Date('2023-03-30').toISOString(),
    status: '종료됨',
    lectures: [
      { id: uuidv4(), lectureTitle: 'Figma 실무', instructor: '김디자이너' },
    ],
  },
]
