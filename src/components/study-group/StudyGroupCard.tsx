import { Card, ImageCard, Text } from '@components'

export default function StudyGroupCard() {
  return (
    <div className="max-w-96">
      <ImageCard title="React 실무 프로젝트 스터디" />
      <Card
        title="React 실무 프로젝트 스터디"
        cardClassName="flex flex-col gap-3 p-5"
      >
        <section className="flex flex-col gap-1">
          <Text>스터디 기간</Text>
          <Text>2025년 3월 11일 ~ 2025년 23월 11일</Text>
        </section>
        <section className="flex flex-col gap-1">
          <Text>스터디 강의</Text>
          <Text>React 완벽 마스터 강의</Text>
          <Text>Next.js 실전 가이드</Text>
        </section>
      </Card>
    </div>
  )
}
