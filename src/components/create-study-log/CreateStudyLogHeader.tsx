import { BreadCrumb, SectionHeader } from '@components'
import { BREAD_CRUMB_PATH } from '@constants'

export default function CreateStudyLogHeader() {
  return (
    <div>
      <BreadCrumb items={BREAD_CRUMB_PATH} className="pb-4" />
      <SectionHeader
        title="스터디 기록 작성"
        subtitle="학습한 내용을 자세히 기록해보세요"
        titleVariant="3xl"
      ></SectionHeader>
    </div>
  )
}
