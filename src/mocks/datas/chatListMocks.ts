import { v4 as uuidv4 } from 'uuid'

import type { ChatList } from '@models'

export const dummyChatList: ChatList = [
  {
    studyGroupUuid: uuidv4(),
    studyGroupName: 'React 스터디 그룹',
    lastMessage: {
      senderNickname: '김개발',
      content: '안녕하세요! 스터디 시작 시간 변경 가능할까요?',
      createdAt: '2025-09-15T10:00:00Z',
    },
    unreadCount: 3,
  },
  {
    studyGroupUuid: uuidv4(),
    studyGroupName: 'Next.js 프로젝트 팀',
    lastMessage: {
      senderNickname: '박리액트',
      content: '오늘 회의록 공유드립니다.',
      createdAt: '2025-09-14T15:30:00Z',
    },
    unreadCount: 0,
  },
  {
    studyGroupUuid: uuidv4(),
    studyGroupName: 'TypeScript 심화반',
    lastMessage: {
      senderNickname: '이프론트',
      content: '이번 주 과제 질문 있습니다.',
      createdAt: '2025-09-13T09:10:00Z',
    },
    unreadCount: 1,
  },
  {
    studyGroupUuid: uuidv4(),
    studyGroupName: '알고리즘 문제풀이',
    lastMessage: {
      senderNickname: '최자바',
      content: '다들 문제 푸셨나요? 질문 있어요.',
      createdAt: '2025-09-12T20:00:00Z',
    },
    unreadCount: 5,
  },
]
