import { Button } from '@/components'
import { PlusIcon } from '@heroicons/react/24/outline'

import BasicInfoSection from '@/components/common/group/BasicInfoSection'
import PeriodMembersSection from '@/components/common/group/PeriodMembersSection'
import LecturePickerSection from '@/components/common/group/LecturePickerSection'
import DateModal from '@/components/common/group/DatePickerModal'
import { useCreateGroupForm } from '@/components/common/group/useCreateGroupForm'

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

    // 공개 범위
    visibility,
    setVisibility,

    // 제출
    isSubmitDisabled,
    handleSubmit,

    // 날짜 모달 관련
    openDateKind,
    tempDate,
    setTempDate,
    openStartPicker,
    openEndPicker,
    closeDateModal,
    confirmDateModal,
    minEndForEndPicker,
    confirmDisabled,
    hasRangeError,
  } = useCreateGroupForm()

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-[880px] px-4 py-8"
    >
      {/* 타이틀 */}
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          새 스터디 그룹 만들기
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          함께 공부할 멤버들의 스터디 그룹을 시작해보세요
        </p>
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

      {/* 강의 선택(임시) */}
      <LecturePickerSection
        visibility={visibility}
        onToggleVisibility={() =>
          setVisibility((v) => (v === 'private' ? 'public' : 'private'))
        }
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
      <DateModal
        isOpen={!!openDateKind}
        kind={openDateKind}
        tempDate={tempDate}
        setTempDate={setTempDate}
        minEndForEndPicker={minEndForEndPicker}
        endDate={endDate}
        close={closeDateModal}
        confirm={confirmDateModal}
        confirmDisabled={confirmDisabled}
      />
    </form>
  )
}

export default CreateGroup
