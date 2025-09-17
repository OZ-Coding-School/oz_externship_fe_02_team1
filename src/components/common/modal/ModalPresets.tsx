import { buttonVariants, ModalHeader, ModalFooter, Text } from '@components'
import { cn } from '@utils'

import type {
  ModalPreset,
  ModalFooterCtx,
  ModalHeaderRenderProps,
  FooterButton,
  FooterButtonsProps,
} from '@components/common/modal/modal.types'

export const SPLIT_ROW = 'flex w-full max-w-[520px] gap-3' // 12px 간격
export const SPLIT_BTN = 'flex-1'

// 공용 버튼 렌더러
export const FooterButtons = ({ buttons }: FooterButtonsProps) => (
  <>
    {buttons.map(({ text, variant, onClick, disabled, className }) => (
      <button
        key={text}
        type="button"
        onClick={onClick}
        disabled={!!disabled}
        className={cn(buttonVariants({ variant, size: 'medium' }), className)}
      >
        {text}
      </button>
    ))}
  </>
)

const MODAL_PRESETS = {
  // 1) 날짜 선택
  dateSelect: {
    size: 'xs',
    header: ({
      onClose,
      title = '스터디 시작일 선택',
      subTitle,
    }: ModalHeaderRenderProps) => (
      <ModalHeader title={title} subTitle={subTitle} onClose={onClose} />
    ),
    footer: ({ onClose, confirmDisabled, onConfirm }: ModalFooterCtx) => {
      const footerButtons: FooterButton[] = [
        { text: '취소', variant: 'outline', onClick: onClose, disabled: false },
        {
          text: '선택 완료',
          variant: 'secondary',
          onClick: onConfirm ?? (() => {}),
          disabled: !!confirmDisabled,
        },
      ]

      return (
        <ModalFooter
          layout="leftRight"
          left={
            <span className="text-sm text-gray-600">날짜를 선택하세요</span>
          }
          right={<FooterButtons buttons={footerButtons} />}
        />
      )
    },
  },

  // 2) 리뷰 작성 (가운데 50/50, 간격 12px)
  reviewWrite: {
    size: 'xsShort',
    header: ({ onClose }: ModalHeaderRenderProps) => (
      <ModalHeader title="리뷰 작성" onClose={onClose} />
    ),
    footer: ({ onClose, onConfirm }: ModalFooterCtx) => {
      const footerButtons: FooterButton[] = [
        {
          text: '취소',
          variant: 'outline',
          onClick: onClose,
          className: SPLIT_BTN,
          disabled: false,
        },
        {
          text: '작성 완료',
          variant: 'secondary',
          onClick: onConfirm ?? (() => {}),
          className: SPLIT_BTN,
          disabled: false,
        },
      ]

      return (
        <ModalFooter
          layout="center"
          right={
            <div className={SPLIT_ROW}>
              <FooterButtons buttons={footerButtons} />
            </div>
          }
        />
      )
    },
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
    footer: ({ onClose, onConfirm }: ModalFooterCtx) => {
      const footerButtons: FooterButton[] = [
        {
          text: '내 리뷰 수정하기',
          variant: 'primary',
          onClick: onConfirm ?? onClose,
          disabled: false,
        },
      ]
      return (
        <ModalFooter
          layout="center"
          right={<FooterButtons buttons={footerButtons} />}
        />
      )
    },
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
    }: ModalFooterCtx & { selectedCount?: number }) => {
      const footerButtons: FooterButton[] = [
        { text: '취소', variant: 'outline', onClick: onClose, disabled: false },
        {
          text: '선택 완료',
          variant: 'primary',
          onClick: onConfirm ?? (() => {}),
          disabled: !selectedCount || selectedCount === 0,
        },
      ]

      return (
        <ModalFooter
          layout="leftRight"
          left={
            selectedCount && selectedCount > 0 ? (
              <span className="text-sm text-gray-500">
                {selectedCount}개의 강의가 선택되었습니다
              </span>
            ) : (
              <span className="text-sm text-gray-400">강의를 선택하세요</span>
            )
          }
          right={<FooterButtons buttons={footerButtons} />}
        />
      )
    },
  },

  // 5) 스케줄 상세
  scheduleDetail: {
    size: 'mdShort',
    header: ({ onClose }: ModalHeaderRenderProps) => (
      <ModalHeader title="스케줄 상세" onClose={onClose} />
    ),
    footer: ({ onClose, onConfirm, createDate, onEdit }: ModalFooterCtx) => {
      const footerButtons: FooterButton[] = [
        { text: '닫기', variant: 'outline', onClick: onClose, disabled: false },
        {
          text: '삭제',
          variant: 'danger',
          onClick: onConfirm ?? (() => {}),
          disabled: false,
        },
        {
          text: '수정',
          variant: 'primary',
          onClick: onEdit ?? (() => {}),
          disabled: false,
        },
      ]

      return (
        <ModalFooter
          layout="leftRight"
          left={
            <Text className="text-sm text-gray-500">생성일: {createDate}</Text>
          }
          right={<FooterButtons buttons={footerButtons} />}
        />
      )
    },
  },

  // 6) 스케줄 추가
  scheduleAdd: {
    size: 'md',
    header: ({ onClose }: ModalHeaderRenderProps) => (
      <ModalHeader title="스케줄 추가" onClose={onClose} />
    ),
    footer: ({ onClose, onConfirm }: ModalFooterCtx) => {
      const footerButtons: FooterButton[] = [
        { text: '취소', variant: 'outline', onClick: onClose, disabled: false },
        {
          text: '추가하기',
          variant: 'primary',
          onClick: onConfirm ?? (() => {}),
          disabled: false,
        },
      ]

      return (
        <ModalFooter
          layout="right"
          right={<FooterButtons buttons={footerButtons} />}
        />
      )
    },
  },
} satisfies Record<string, ModalPreset>

export default MODAL_PRESETS
