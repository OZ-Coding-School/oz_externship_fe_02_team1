import { Input } from '../common'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import StudyGroupCard from './StudyGroupCard'

export default function StudyGroupHeader() {
  return (
    <>
      <div>StudyGroupHeader</div>
      <Input
        placeholder="스터디 그룹 검색...."
        leftIcon={<MagnifyingGlassIcon className="h-4 w-4" />}
      />
      <StudyGroupCard />
    </>
  )
}
