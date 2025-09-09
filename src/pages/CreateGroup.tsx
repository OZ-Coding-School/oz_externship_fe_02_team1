import { PlusIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

import { Button, H1, Text } from '@components'
import BasicInfoSection from '@components/create-group/BasicInfoSection'
import LecturePickerSection from '@components/create-group/LecturePickerSection'
import PeriodMembersSection from '@components/create-group/PeriodMembersSection'
// import DateModal from '@/components/common/group/DatePickerModal'
import { useCreateGroupForm } from '@components/create-group/useCreateGroupForm'

const CreateGroup = () => {
  const {
    // 기본 정보
    groupName,
    setGroupName,
    description,
    setDescription,

    // 기간/인원
    startDate,
    endDate,
    maxMembers,
    setMaxMembers,

    // 제출
    isSubmitDisabled,
    handleSubmit,

    // 날짜 모달 관련
    // openDateKind,
    // tempDate,
    // setTempDate,
    openStartPicker,
    openEndPicker,
    // closeDateModal,
    // confirmDateModal,
    // minEndForEndPicker,
    // confirmDisabled,
    hasRangeError,
  } = useCreateGroupForm()

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-[832px] px-4 py-8"
    >
      <header className="mb-6 flex items-center gap-2">
        <Button
          type="button"
          variant="ghost"
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
          onClick={() => history.back()}
        >
          <ArrowLeftIcon
            width={28}
            height={28}
            className="h-7 w-7 text-gray-600"
            strokeWidth={2.5}
          />
        </Button>

        <div>
          <H1>새 스터디 그룹 만들기</H1>
          <Text variant="small" className="mt-1 block text-gray-500">
            함께 공부할 멤버들의 스터디 그룹을 시작해보세요
          </Text>
        </div>
      </header>

      {/* 기본 정보 */}
      <BasicInfoSection
        groupName={groupName}
        description={description}
        onChangeGroupName={setGroupName}
        onChangeDescription={setDescription}
      />

      {/* 기간 & 인원 */}
      <PeriodMembersSection
        startDate={startDate}
        endDate={endDate}
        maxMembers={maxMembers}
        onOpenStart={openStartPicker}
        onOpenEnd={openEndPicker}
        onChangeMaxMembers={setMaxMembers}
        hasRangeError={hasRangeError}
      />

      {/* 강의 선택(임시)－모달 생성 후 수정 예정 */}
      <LecturePickerSection
        selectedLectures={[]} // 선택된 강의 목록
        actionSlot={
          <Button type="button" size="small" aria-label="강의 선택">
            <span className="inline-flex items-center gap-1.5">
              <PlusIcon className="h-4 w-4" aria-hidden />
              <span>강의 선택</span>
            </span>
          </Button>
        }
      />

      {/* 액션 */}
      <footer className="mt-8 flex items-center justify-end gap-3">
        <Button type="button" variant="outline" onClick={() => history.back()}>
          취소
        </Button>
        <Button type="submit" variant="primary" disabled={isSubmitDisabled}>
          스터디 그룹 만들기
        </Button>
      </footer>

      {/* 날짜 선택 모달 */}
      {/* <DateModal
        isOpen={!!openDateKind}
        kind={openDateKind}
        tempDate={tempDate}
        setTempDate={setTempDate}
        minEndForEndPicker={minEndForEndPicker}
        endDate={endDate}
        close={closeDateModal}
        confirm={confirmDateModal}
        confirmDisabled={confirmDisabled}
      /> */}
    </form>
  )
}

export default CreateGroup
