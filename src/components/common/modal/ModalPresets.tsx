import { cn } from '@/utils'
import ModalHeader from '@/components/common/modal/ModalHeader'
import ModalFooter from '@/components/common/modal/ModalFooter'
import { buttonVariants } from '@/components/common/button/buttonVariants'
import type {
  ModalPreset,
  ModalFooterCtx,
  ModalHeaderRenderProps,
} from '@/components/common/modal/modal.types'

export const SPLIT_ROW = 'flex w-full max-w-[520px] gap-3' // 12px 간격
export const SPLIT_BTN = 'flex-1'

const MODAL_PRESETS = {
  // 1) 날짜 선택
  dateSelect: {
    size: 'xs',
    header: ({
      onClose,
      title = '스터디 시작일 선택', // title과 subTitle은 api에서 받아 오도록
      subTitle,
    }: ModalHeaderRenderProps) => (
      <ModalHeader title={title} subTitle={subTitle} onClose={onClose} />
    ),
    footer: ({ onClose, confirmDisabled, onConfirm }: ModalFooterCtx) => (
      <ModalFooter
        layout="leftRight"
        left={<span className="text-sm text-[#4B5563]">날짜를 선택하세요</span>}
        right={
          <>
            <button
              type="button"
              onClick={onClose}
              className={cn(
                buttonVariants({ variant: 'outline', size: 'medium' })
              )}
            >
              취소
            </button>
            <button
              type="button"
              disabled={!!confirmDisabled}
              onClick={onConfirm}
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'medium' })
              )}
            >
              선택 완료
            </button>
          </>
        }
      />
    ),
  },

  // 2) 리뷰 작성 (가운데 50/50, 간격 12px)
  reviewWrite: {
    size: 'xsShort',
    header: ({ onClose }: ModalHeaderRenderProps) => (
      <ModalHeader title="리뷰 작성" onClose={onClose} />
    ),
    footer: ({ onClose, onConfirm }: ModalFooterCtx) => (
      <ModalFooter
        layout="center"
        right={
          <div className={SPLIT_ROW}>
            <button
              type="button"
              onClick={onClose}
              className={cn(
                buttonVariants({ variant: 'outline', size: 'medium' }),
                SPLIT_BTN
              )}
            >
              취소
            </button>
            <button
              type="button"
              onClick={onConfirm}
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'medium' }),
                SPLIT_BTN
              )}
            >
              작성 완료
            </button>
          </div>
        }
      />
    ),
  },

  // 3) 스터디 리뷰
  studyReview: {
    size: 'md',
    header: ({ onClose }: ModalHeaderRenderProps) => (
      <ModalHeader
        title="스터디 리뷰"
        subTitle="Node.js 백엔드 개발팀"
        onClose={onClose}
      />
    ),
    footer: ({ onClose, onConfirm }: ModalFooterCtx) => (
      <ModalFooter
        layout="center"
        right={
          <button
            type="button"
            onClick={onConfirm ?? onClose}
            className={cn(
              buttonVariants({ variant: 'primary', size: 'medium' })
            )}
          >
            내 리뷰 수정하기
          </button>
        }
      />
    ),
  },

  // 4) 강의 선택
  search: {
    size: 'lg',
    header: ({ onClose }: ModalHeaderRenderProps) => (
      <ModalHeader
        title="강의 선택"
        subTitle="스터디에 등록할 강의를 찾아보세요"
        onClose={onClose}
      />
    ),
    footer: ({
      onClose,
      onConfirm,
      selectedCount,
    }: ModalFooterCtx & { selectedCount?: number }) => (
      <ModalFooter
        layout="leftRight"
        left={
          selectedCount && selectedCount > 0 ? (
            <span className="text-sm text-[#6B7280]">
              {selectedCount}개의 강의가 선택되었습니다
            </span>
          ) : (
            <span className="text-sm text-[#9CA3AF]">강의를 선택하세요</span>
          )
        }
        right={
          <>
            <button
              type="button"
              onClick={onClose}
              className={cn(
                buttonVariants({ variant: 'outline', size: 'medium' })
              )}
            >
              취소
            </button>
            <button
              type="button"
              onClick={onConfirm}
              disabled={!selectedCount || selectedCount === 0}
              className={cn(
                buttonVariants({ variant: 'primary', size: 'medium' })
              )}
            >
              선택 완료
            </button>
          </>
        }
      />
    ),
  },

  // 5) 스케줄 상세
  scheduleDetail: {
    size: 'mdShort',
    header: ({ onClose }: ModalHeaderRenderProps) => (
      <ModalHeader title="스케줄 상세" onClose={onClose} />
    ),
    footer: ({ onClose, onConfirm }: ModalFooterCtx) => (
      <ModalFooter
        layout="leftRight"
        left={<span className="text-sm text-[#6B7280]">2025-09-03 (수)</span>}
        right={
          <>
            <button
              type="button"
              onClick={onClose}
              className={cn(
                buttonVariants({ variant: 'outline', size: 'medium' })
              )}
            >
              닫기
            </button>
            <button
              type="button"
              onClick={onConfirm}
              className={cn(
                buttonVariants({ variant: 'danger', size: 'medium' })
              )}
            >
              삭제
            </button>
            <button
              type="button"
              onClick={onConfirm}
              className={cn(
                buttonVariants({ variant: 'primary', size: 'medium' })
              )}
            >
              수정
            </button>
          </>
        }
      />
    ),
  },
} satisfies Record<string, ModalPreset> // 찾아보니 키 확장에도 타입 안전이라고 작성확인

export default MODAL_PRESETS
