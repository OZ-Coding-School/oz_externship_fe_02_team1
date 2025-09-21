import type { ChatMessage } from '@models'
import { studyGroupMember } from '@mocks/studyGroupDetail'

export const dummyChatMessages: ChatMessage[] = [
  {
    messageId: 1,
    sender: studyGroupMember[1],
    content: '안녕하세요! 오늘 스터디 주제는 뭔가요?',
    createdAt: '2023-09-21T10:00:00Z',
  },
  {
    messageId: 2,
    sender: studyGroupMember[0],
    content: '안녕하세요! 오늘은 리액트 훅에 대해서 이야기해보려고 합니다.',
    createdAt: '2023-09-21T10:01:00Z',
  },
  {
    messageId: 3,
    sender: studyGroupMember[3],
    content:
      '좋아요! 저는 `useMemo`와 `useCallback`의 차이점에 대해 항상 헷갈렸어요.',
    createdAt: '2023-09-21T10:02:00Z',
  },
  {
    messageId: 4,
    sender: studyGroupMember[0],
    content:
      '좋은 질문이네요. `useMemo`는 값을 메모이제이션하고, `useCallback`은 함수를 메모이제이션합니다. 예시를 보여드릴게요.',
    createdAt: '2023-09-21T10:03:00Z',
  },
]
