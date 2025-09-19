import type { StudyLog } from '@/types/studyLog'

export const dummyStudyLog: StudyLog = {
  id: 10,
  title: 'Django ORM 학습',
  content: `# Django ORM의 개념
## 1. ORM이란?
객체(Object)와 관계형 데이터베이스(Relational Database)를 매핑하는 기술입니다. SQL 쿼리 대신 파이썬 코드를 사용하여 데이터베이스를 조작할 수 있게 해줍니다.

## 2. QuerySet 사용법
- \`all()\`: 모든 객체를 가져옵니다.
- \`filter(name='value')\`: 특정 조건에 맞는 객체를 가져옵니다.
- \`get(id=1)\`: 특정 ID를 가진 단일 객체를 가져옵니다.

### 첨부 이미지
아래 이미지는 Django ORM의 기본 구조를 나타냅니다.

![ORM 구조](https://example.com/image_orm_structure.png)

**결론:**
ORM을 사용하면 데이터베이스에 대한 의존성을 줄이고, 코드를 더 객체 지향적으로 작성할 수 있습니다.`,
  author: {
    id: 5,
    nickname: 'junGyu',
    profile_image: 'https://example.com/profile.png',
  },
  images: [
    { id: 1, img_url: 'https://example.com/image_orm_structure.png' },
    { id: 2, img_url: 'https://example.com/image_query_example.jpg' },
  ],
  attachments: [
    {
      id: 1,
      file_name: 'example1.zip',
      file_url: 'https://example.com/example1.zip',
    },
    {
      id: 2,
      file_name: 'example2.pdf',
      file_url: 'https://example.com/example2.pdf',
    },
    {
      id: 1,
      file_name: 'example1.zip',
      file_url: 'https://example.com/example1.zip',
    },
    {
      id: 2,
      file_name: 'example2.pdf',
      file_url: 'https://example.com/example2.pdf',
    },
  ],
  ai_summary: {
    summary: '오늘은 Django ORM 기본 개념과 QuerySet 사용법을 학습했습니다.',
    collapsible: true,
  },
  created_at: '2025-08-30 10:20',
  updated_at: '2025-08-30 11:00',
}
