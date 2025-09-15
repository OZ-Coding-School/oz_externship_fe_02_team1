import { useState, useEffect } from 'react'

import { StudyGroupForm } from '@components'
import { formatToYMD } from '@utils'
import type { StudyGroupLectureList } from '@models'
import { studyGroup } from '@mocks/studyGroupDetail'

interface StudyGroupFormContainerProps {
  mode: 'create' | 'edit'
}

const INITIAL_MEMBER_COUNT = 6

export default function StudyGroupFormContainer({
  mode,
}: StudyGroupFormContainerProps) {
  const [groupName, setGroupName] = useState<string>('')
  const [description, setDescription] = useState<string | undefined>('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const [memberCount, setMemberCount] = useState<number>(INITIAL_MEMBER_COUNT)
  const [lectures, setLectures] = useState<StudyGroupLectureList[]>([])
  const [initialImageUrl, setInitialImageUrl] = useState<string | null>(null)

  useEffect(() => {
    if (mode === 'edit') {
      setGroupName(studyGroup.studyGroupName)
      setDescription(studyGroup.description)
      setStartDate(formatToYMD(studyGroup.startDate))
      setEndDate(formatToYMD(studyGroup.lastDate))
      setMemberCount(studyGroup.maxMemberCount)
      setLectures(studyGroup.lecture || [])
      setInitialImageUrl(studyGroup.backgroundImage || null)
    }
  }, [mode])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (mode === 'create') {
      // TODO: Implement create logic
      alert('Creating study group...')
    } else {
      // TODO: Implement update logic
      alert('Updating study group...')
    }
  }

  return (
    <StudyGroupForm
      mode={mode}
      onSubmit={handleSubmit}
      groupName={groupName}
      onChangeGroupName={setGroupName}
      description={description}
      onChangeDescription={setDescription}
      imageFile={imageFile}
      onChangeImage={setImageFile}
      initialImageUrl={initialImageUrl}
      startDate={startDate}
      endDate={endDate}
      memberCount={memberCount}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      onMemberCountChange={setMemberCount}
      lectures={lectures}
    />
  )
}
