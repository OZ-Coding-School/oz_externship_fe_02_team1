import { LogDetailHeader } from '@components'

export default function StudyLogDetail() {
  const studyLogData = {
    title: 'React Hooks 실습 정리',
    userImage: 'https://placehold.co/32x32',
    userName: '김개발',
    createdAt: '작성일: 2024. 02. 16. 오전 05:30',
  }
  return (
    <>
      <LogDetailHeader studyLogData={studyLogData} />
    </>
  )
}
